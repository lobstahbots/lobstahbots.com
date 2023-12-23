import { getAllPosts } from "../../lib/posts";
import  PostPreview  from "../../components/postPreview";
import PageTitle from "../../components/page-title";

export default function Blog() {
  const posts = getAllPosts(["title", "date", "excerpt", "slug"]);

  return (
    <div>
      <main>
        <div className="container">
          <PageTitle>All Posts</PageTitle>
          <div>
            {posts.map((post) => (
              <div>
                <PostPreview post={post} />
              </div>
            ))}
          </div>
        </div>
        
        
      </main>
    </div>
  );
}
