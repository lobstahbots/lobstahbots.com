import { getAllPosts } from "../../lib/api";
import PostPreview from "../../components/postPreview";
import PageTitle from "../../components/page-title";
import styles from "./styles.module.css";

export default async function Posts() {
  console.log(process.env);
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
