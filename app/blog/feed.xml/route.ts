import { NextResponse } from "next/server";
import { getAllPosts } from "../../../lib/api";

export async function GET() {
  let content =
    "<rss xmlns:atom='http://www.w3.org/2005/Atom' version='2.0'><channel>" +
    "<title>FRC 246 | Lobstah Bots Newsletter</title>" +
    "<link>https://lobstahbots.org/blog</link>" +
    "<description>The newsletter of FIRST Robotics Competition team 246, the Lobstah Bots.</description>" +
    "<language>en-us</language>" +
    `<copyright>${new Date().getFullYear()} FRC 246 | Lobstah Bots</copyright>` +
    "<webMaster>danieldd@bu.edu (Daniel D)</webMaster>" +
    "<image><url>https://lobstahbots.com/icon.png</url>" +
    "<title>FRC 246 | Lobstah Bots Newsletter</title>" +
    "<link>https://lobstahbots.org/blog</link></image>";
  const posts = getAllPosts();
  for (const post of posts) {
    content +=
      "<item><title>" +
      post.title +
      "</title><link>https://lobstahbots.com/blog/" +
      post.slug +
      "</link><pubDate>" +
      new Date(post.numericalDate).toUTCString() +
      "</pubDate><description>" +
      post.title +
      "</description><source:markdown>" +
      post.content +
      "</source:markdown" +
      "</item>";
  }
  content += "</channel></rss>";
  return new NextResponse(content, {
    status: 200,
    headers: {
      "Content-Type": "application/rss+xml",
    },
  });
}
