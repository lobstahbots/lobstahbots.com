"use module";
import { Client, isFullPage } from "@notionhq/client";
import { ImageBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionToMarkdown } from "notion-to-md";
import path from "path";
import fs from "fs/promises";
import { fileURLToPath } from "url";
import { createHash } from "crypto";
import { ListBlockChildrenResponseResult } from "notion-to-md/build/types";
import md from "notion-to-md/build/utils/md.js";
import matter from "gray-matter";

const baseDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

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

const getImageUrl = async (unparsedUrl: string): Promise<string> => {
  const url = new URL(unparsedUrl);
  const fileUrl = `/newsletter/${currSlug}/${createHash("md5")
    .update(url.pathname)
    .digest("hex")}${path.extname(url.pathname)}`;
  const filePath = path.join(baseDir, "public", fileUrl);
  try {
    await fs.access(filePath);
  } catch (error) {
    const response = await fetch(url);
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, Buffer.from(await response.arrayBuffer()));
  }
  return fileUrl;
};

toMarkdown.setCustomTransformer("image", async (block) => {
  const image = (block as ImageBlockObjectResponse).image;
  const url = image.type === "external" ? image.external.url : image.file.url;
  return (
    (await md.image(
      image.caption.map((rich_text) => rich_text.plain_text).join(""),
      await getImageUrl(url),
      false
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
  return "\n###### " + (await toMarkdown.blockToMarkdown(block));
});

const newslettersPage = await notion.databases.query({
  database_id,
  filter: {
    property: "Published",
    checkbox: {
      equals: true,
    },
  },
});

for (const pageResult of newslettersPage.results) {
  if (!isFullPage(pageResult)) {
    continue;
  }
  const slugProp = pageResult.properties.Slug;
  if (slugProp.type !== "rich_text") {
    continue;
  }
  const slug = slugProp.rich_text
    .map((rich_text) => rich_text.plain_text)
    .join("");
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
  const fundraiseText =
    fundraiseTextProp.rich_text
      .map((rich_text) => rich_text.plain_text)
      .join("") || undefined;
  const cover = pageResult.cover;
  const coverUrl =
    cover && (cover.type === "external" ? cover.external.url : cover.file.url);
  const properties = {
    excerpt: "",
    author: "Lobstah Bots",
    type: "newsletter",
    title: titleProp.title.map((rich_text) => rich_text.plain_text).join(""),
    numericalDate: dateProp.date!.start,
    date: `${months[date.getUTCMonth()]} ${date.getUTCFullYear()}`,
    coverImage: coverUrl ?? "/newsletter/default.png",
    fundraiseText,
  };
  const output = matter.stringify(
    toMarkdown.toMarkdownString(await toMarkdown.pageToMarkdown(pageResult.id))
      .parent,
    properties
  );
  currSlug = "default";
  await fs.writeFile(path.resolve(baseDir, `_posts/${slug}.md`), output);
}
