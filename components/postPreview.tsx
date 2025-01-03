"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import styles from "./postPreview.module.css";

type Items = {
  [key: string]: string;
};

export default function PostPreview({ post }: { post: Items }) {
  var coverImage;
  if (post.coverImage !== null && post.coverImage !== undefined) {
    coverImage = post.coverImage;
  } else {
    coverImage = "/newsletter/default.png";
  }

  return (
    <div className = {`brand-border ${styles.preview}`}>
      <div><Image alt={ `cover image for ${post.title}` } src = { coverImage } width = { 400} height = { 400} className = {`responsive-image ${styles.image}`} /></div>
      <div className = {styles.title}><Link className = { styles.link } href = { `/blog/${post.slug}`}> {post.title}</Link></div>
      <div className = {styles.date}> {post.date} </div>
    </div>
  );
}
