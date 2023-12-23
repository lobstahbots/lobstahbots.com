import { getAllPosts, getPostSlugs, getPostBySlug } from "../../../lib/api";
import markdownToHtml from "../../../lib/markdownToHTML";
import styles from "./styles.module.css";
import Image from "next-image-export-optimizer";
import Link from "next/link";
import { GetStaticPaths } from 'next';

async function Page({ params }: { params: { slug: string } }) {

   const getPost = getPostBySlug(params.slug, ["title", "author", "content", "date"]);

  const content = await markdownToHtml(getPost["content"] || "");

  return (
    <div className = "section container" >
    <div className = { styles.logoLine }><Image className = {`responsive-image ${styles.logo}`} width = "564" height = "564" id="2" alt = "Logo" src = "https://mcusercontent.com/b62ff52e31b232a8696b02d06/images/5d14253b-cfaf-9ad4-6bb2-c09779fc9abd.png"/></div>
      <div className = {styles.newsletterName}> <div id="17"> <p> <strong><span> NEWSLETTER </span><span className = {styles.vert}><span>|</span > </span><span className = {styles.date}> {getPost.date} </span> </strong></p> </div></div>    
      <div className = {styles.breakLine} > </div>
      <div className = {styles.content}> 
        <h1 className = {styles.title} > {getPost.title} </h1>
        < div className = { styles["markdown"]} dangerouslySetInnerHTML = {{ __html: content }} />
        </div>
        <div className = {styles.button}>
        <Link href = "https://trusted.bu.edu/s/1759/22/form.aspx?sid=1759&gid=2&pgid=3962&cid=7331&dids=359&bledit=1&appealcode=WEBBUA" target = "_blank" className = { styles.donateButton } > Support Us! </Link>
        </div>
  < div className = { styles.breakLine } > </div>
  
  <div className = {styles.mediaIcons}>
  <div className = { styles.icon }> 
  <Link href="https://instagram.com/burobotics246/" target = "_blank" > <Image className = { `responsive-image ${styles.icon}` } width = "40" height = "40" alt = "Instagram icon" src = "https://cdn-images.mailchimp.com/icons/social-block-v3/block-icons-v3/instagram-filled-dark-40.png"/></Link></div>
  <div className = { styles.icon }> 
  <Link href="mailto:lobstahbots@gmail.com" target = "_blank" > <Image className = { `responsive-image ${styles.icon}` } width = "40" height = "40" alt = "Email icon" src = "https://cdn-images.mailchimp.com/icons/social-block-v3/block-icons-v3/email-filled-dark-40.png"/> </Link> </div>
  <div className = { styles.icon }> <Link href = "https://lobstahbots.com" target = "_blank" > <Image className = { `responsive-image ${styles.icon}` } width = "40" height = "40" alt = "Website icon" src = "https://cdn-images.mailchimp.com/icons/social-block-v3/block-icons-v3/website-filled-dark-40.png"/> </Link> </div>
  </div>
    </div>
  );
}

export async function getStaticPaths() {

  var paths = getPostSlugs();

  paths = paths.map((bit) => { return ("/posts/".concat(bit.replace(/\.md$/, ''))); });

  return {
    paths,
    fallback: true,
  }
}

export default Page;