import { getPostBySlug } from "../../../lib/posts";
import markdownToHtml from "../../../lib/markdownToHTML";
import markdownStyles from "./markdown-styles.module.css";
import styles from "./styles.module.css";
import Image from "next-image-export-optimizer";

export default async function Post ({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug, ["title", "author", "content", "date"]);

  const content = await markdownToHtml(post["content"] || "");

  return (
    <div className = "section container">
      <div className = { styles.logoLine }><Image className = {`responsive-image ${styles.logo}`} width = "564" height = "564" id="2" alt = "Logo" src = "https://mcusercontent.com/b62ff52e31b232a8696b02d06/images/5d14253b-cfaf-9ad4-6bb2-c09779fc9abd.png"/></div>
      <div className = {styles.newsletterName}> <div id="17"> <p> <strong><span> NEWSLETTER </span><span className = {styles.vert}><span>|</span > </span><span className = {styles.date}> {post.date} </span> </strong></p> </div></div>    
      <div className = {styles.breakLine} > </div>
      <div className = {styles.content}> 
        <h1 className = {styles.title} > {post.title} </h1>
        < div className = { markdownStyles["markdown"]} dangerouslySetInnerHTML = {{ __html: content }} />
        </div>
      </div>
  );
}
