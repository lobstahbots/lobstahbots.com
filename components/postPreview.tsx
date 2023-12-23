import DateFormatter from "./dateFormatter";
import styles from "./postPreview.module.css";
import Image from "next/image";
import Link from "next/link";

type Items = {
  [key: string]: string;
};

export default function PostPreview({ post }: { post: Items }) {
  return (
    <div className = {styles.preview}>
      <Link href={ `/posts/${post["slug"]}` }> {post["title"]}
      </Link>
    </div>
  );
}

