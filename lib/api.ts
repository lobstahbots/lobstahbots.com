import dbConnect from "./dbConnect";
import Newsletter, { INewsletter } from "../models/newsletter";
import { unstable_cache } from "next/cache";
import { HydratedDocument } from "mongoose";
import ImageModel from "../models/image";

export const getPostSlugs = unstable_cache(
  async () => {
    await dbConnect();
    const newsletters = await Newsletter.find({}).select("slug").sort({ numericalDate: -1 });
    return newsletters.map((newsletter) => newsletter.slug);
  },
  [],
  {
    tags: ["newsletters"],
  },
);

export const getPostBySlug = unstable_cache(
  async (slug: string): Promise<HydratedDocument<INewsletter>> => {
    await dbConnect();
    const newsletter = await Newsletter.findOne({ slug }).populate("coverImage").populate("images");
    if (!newsletter) {
      throw new Error(`Newsletter with slug ${slug} not found`);
    }
    return newsletter;
  },
  [],
  {
    tags: ["newsletters"],
  },
);

export const getAllPosts = unstable_cache(
  async (): Promise<HydratedDocument<INewsletter>[]> => {
    await dbConnect();
    const newsletters = await Newsletter.find({})
      .sort({ numericalDate: -1 })
      .populate("coverImage")
      .populate("images");
    return newsletters;
  },
  [],
  {
    tags: ["newsletters"],
  },
);

export const getPreviousPost = unstable_cache(
  async (slug: string): Promise<HydratedDocument<INewsletter> | undefined> => {
    const posts = await getAllPosts();
    const currentPostIndex = posts.findIndex((post) => post.slug === slug);
    if (0 <= currentPostIndex && currentPostIndex < posts.length) {
      return posts[currentPostIndex + 1];
    }
  },
  [],
  {
    tags: ["newsletters"],
  },
);

export const getNextPost = unstable_cache(
  async (slug: string): Promise<HydratedDocument<INewsletter> | undefined> => {
    const posts = await getAllPosts();
    const currentPostIndex = posts.findIndex((post) => post.slug === slug);
    if (0 <= currentPostIndex && currentPostIndex <= posts.length) {
      return posts[currentPostIndex - 1];
    }
  },
  [],
  {
    tags: ["newsletters"],
  },
);
