"use client";
import Link from "next/link";
import React from "react";
import styles from "./postPreview.module.css";
import { INewsletter } from "../models/newsletter";
import { HydratedDocument, Document } from "mongoose";
import { IImage } from "../models/image";

export default function PostPreview({ post }: { post: HydratedDocument<INewsletter> }) {
  if (post.coverImage === undefined || !(post.coverImage instanceof Object)) {
    throw new Error("PostPreview requires populated coverImage");
  }
  return (
    <div className={`brand-border ${styles.preview}`}>
      <div>
        <img
          alt={`cover image for ${post.title}`}
          src={"https://r2.lobstahbots.com/" + (post.coverImage as IImage).key}
          width={400}
          height={400}
          className={`responsive-image ${styles.image}`}
        />
      </div>
      <div className={styles.title}>
        <Link className={styles.link} href={`/blog/${post.slug}`}>
          {" "}
          {post.title}
        </Link>
      </div>
      <div className={styles.date}> {post.date} </div>
    </div>
  );
}
