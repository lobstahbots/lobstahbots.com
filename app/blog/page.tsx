import { getAllPosts } from "../../lib/api";
import PostPreview from "../../components/postPreview";
import PageTitle from "../../components/page-title";
import styles from "./styles.module.css";
import { Document } from "mongoose";

export default async function Posts() {
  const posts = await getAllPosts();

  return (
    <div>
      <main>
        <div className={styles.section}>
          <PageTitle>All Posts</PageTitle>
          <div className={styles.posts}>
            {posts.map((post) => (
              <div key={post.slug}>
                <PostPreview post={post} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
