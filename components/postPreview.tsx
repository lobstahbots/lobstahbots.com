"use client";

import styles from "./postPreview.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";


type Items = {
  [key: string]: string;
};

export default function PostPreview({ post }: { post: Items }) {
  const router = useRouter();
  router.push(`/blog/${post.slug}`);

  return (
    <div className = {styles.preview}>
      <Link className = {styles.title} href={ `/blog/${post.slug}` }> {post.title}
      </Link>
      <div> {post.date} </div>
    </div>
  );
}

