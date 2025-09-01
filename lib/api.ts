import * as fs from "fs";
import path from "path";
import matter from "gray-matter";

type Items = {
  [key: string]: string;
};

const postsDirectory = path.join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []) {
  fields = ["title", "content", "author", "date", "numericalDate", "slug", "type", "coverImage"];
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.numericalDate > post2.numericalDate ? -1 : 1));

  return posts;
}

export function getPreviousPost(slug: string): Items | undefined {
  const posts = getAllPosts();
  const currentPostIndex = posts.findIndex((post) => post.slug === slug);
  if (0 <= currentPostIndex && currentPostIndex < posts.length) {
    return posts[currentPostIndex + 1];
  }
}

export function getNextPost(slug: string): Items | undefined {
  const posts = getAllPosts();
  const currentPostIndex = posts.findIndex((post) => post.slug === slug);
  if (0 < currentPostIndex && currentPostIndex <= posts.length) {
    return posts[currentPostIndex - 1];
  }
}
