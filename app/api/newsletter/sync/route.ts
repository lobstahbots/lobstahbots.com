import { Client, isFullPage } from "@notionhq/client";
import {
  CalloutBlockObjectResponse,
  ImageBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { NotionToMarkdown } from "notion-to-md";
import { createHash } from "crypto";
import { ListBlockChildrenResponseResult } from "notion-to-md/build/types";
import md from "notion-to-md/build/utils/md.js";
import sharp from "sharp";
import path from "path";
import { list, put, del } from "@vercel/blob";
import Newsletter from "../../../../models/newsletter";
import dbConnect from "../../../../lib/dbConnect";
import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export const POST = async () => {
  await dbConnect();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const database_id = process.env.NOTION_DATABASE_ID!;

  const notion = new Client({ auth: process.env.NOTION_TOKEN });

  const toMarkdown = new NotionToMarkdown({
    notionClient: notion,
    config: { convertImagesToBase64: false, parseChildPages: false },
  });

  let currSlug = "default";

  const coverImgMap = new Map<string, string>();

  const extantBlobs = await list({ prefix: "newsletter/" });

  const imgMap = new Map<string, string[]>();

  const getImageUrl = async (unparsedUrl: string): Promise<string> => {
    const url = new URL(unparsedUrl);
    const fileUrlName = `newsletter/${currSlug}/${createHash("md5")
      .update(url.pathname)
      .digest("hex")}${path.extname(url.pathname)}`;
    const fileUploaded =
      extantBlobs.blobs.find((blob) => blob.pathname === fileUrlName) ??
      (await fetch(url.toString()).then(async (res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`);
        }
        const buffer = await res.arrayBuffer();
        const webp = await sharp(Buffer.from(buffer)).rotate().webp({ quality: 80 }).toBuffer();
        const uploaded = await put(fileUrlName, webp, {
          access: "public",
        });
        return uploaded;
      }));
    if (!fileUploaded) {
      throw new Error("Failed to upload image");
    }
    if (!coverImgMap.has(currSlug)) coverImgMap.set(currSlug, fileUploaded.url);
    if (!imgMap.has(currSlug)) imgMap.set(currSlug, []);
    imgMap.get(currSlug)!.push(fileUploaded.url);
    return fileUploaded.url;
  };

  toMarkdown.setCustomTransformer("image", async (block) => {
    const image = (block as ImageBlockObjectResponse).image;
    const url = image.type === "external" ? image.external.url : image.file.url;
    return (
      (await md.image(
        image.caption.map((rich_text) => rich_text.plain_text).join(""),
        await getImageUrl(url),
        false,
      )) +
      "\n#### " +
      (await toMarkdown.blockToMarkdown({
        type: "paragraph",
        paragraph: {
          rich_text: image.caption,
          color: "default",
        },
      } as ListBlockChildrenResponseResult))
    );
  });

  toMarkdown.setCustomTransformer("callout", async (block) => {
    const callout = (block as CalloutBlockObjectResponse).callout;
    return (
      "\n###### " +
      (await toMarkdown.blockToMarkdown({
        type: "paragraph",
        paragraph: callout,
      } as any as ListBlockChildrenResponseResult))
    );
  });

  const newslettersDatabase = await notion.databases.retrieve({
    database_id,
  });

  const newslettersPage = await notion.dataSources.query({
    data_source_id: (newslettersDatabase as any).data_sources[0].id,
    filter: {
      property: "Published",
      checkbox: {
        equals: true,
      },
    },
  });

  const slugs: string[] = [];

  for (const pageResult of newslettersPage.results) {
    if (!isFullPage(pageResult)) {
      continue;
    }
    const slugProp = pageResult.properties.Slug;
    if (slugProp.type !== "rich_text") {
      continue;
    }
    const slug = slugProp.rich_text.map((rich_text) => rich_text.plain_text).join("");
    currSlug = slug;
    const titleProp = pageResult.properties.Title;
    if (titleProp.type !== "title") {
      continue;
    }
    const dateProp = pageResult.properties["Published Date"];
    if (dateProp.type !== "date") {
      continue;
    }
    const date = new Date(dateProp.date!.start);
    const fundraiseTextProp = pageResult.properties["Fundraise Text"];
    if (fundraiseTextProp.type !== "rich_text") {
      continue;
    }
    const fundraiseText = fundraiseTextProp.rich_text
      .map((rich_text) => rich_text.plain_text)
      .join("");
    let fundraiseTextObject = {};
    if (fundraiseText) {
      fundraiseTextObject = { fundraiseText };
    }
    let markdown;
    try {
      markdown = toMarkdown.toMarkdownString(await toMarkdown.pageToMarkdown(pageResult.id)).parent;
    } catch (e) {
      if (e instanceof Error) {
        return NextResponse.json({ message: e.message }, { status: 500 });
      } else {
        return NextResponse.json({ message: "An unknown error occurred" }, { status: 500 });
      }
    }
    const properties = {
      title: titleProp.title.map((rich_text) => rich_text.plain_text).join(""),
      numericalDate: new Date(dateProp.date!.start),
      date: `${months[date.getUTCMonth()]} ${date.getUTCFullYear()}`,
      ...fundraiseTextObject,
      coverImage: "/newsletter/default.png",
      slug,
      content: markdown,
      images: imgMap.get(currSlug) ?? [],
    };
    if (coverImgMap.has(currSlug)) {
      properties.coverImage = coverImgMap.get(currSlug)!;
    }
    await Newsletter.findOneAndReplace({ slug }, properties, { upsert: true });
    slugs.push(slug);
  }

  for (const newsletter of await Newsletter.find({ slug: { $nin: slugs } }).select("_id images")) {
    await del(newsletter.images);
    await Newsletter.deleteOne({ _id: newsletter._id });
  }

  revalidateTag("newsletters", "max");

  return NextResponse.json({ message: "Newsletter sync complete", slugs }, { status: 200 });
};
