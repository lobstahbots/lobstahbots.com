import { getPostSlugs, getPostBySlug, getPreviousPost, getNextPost } from "../../../lib/api";
import styles from "./styles.module.css";
import longWordmark from "../../../images/logos/long-wordmark.png";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { ArrowLeftCircle, ArrowRightCircle } from "react-feather";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const getPost = getPostBySlug(`${slug}.md`, [
    "title",
    "author",
    "content",
    "date",
    "fundraiseText",
  ]);

  const previousPost = getPreviousPost(slug);
  const nextPost = getNextPost(slug);

  // const content = await markdownToHtml(getPost.content);

  return (
    <div className="section container">
      <div className={styles.logoLine}>
        <Link href="/">
          <Image
            className={`responsive-image ${styles.logo}`}
            id="2"
            alt="Long Wordmark"
            src={longWordmark}
          />
        </Link>
      </div>
      <div className={styles.newsletterName}>
        {" "}
        <div id="17">
          {" "}
          <p>
            {" "}
            <strong>
              <span>
                {" "}
                <Link href="/blog">NEWSLETTER</Link>{" "}
              </span>
              <span className={styles.vert}>
                <span>|</span>{" "}
              </span>
              <span className={styles.date}> {getPost.date} </span>{" "}
            </strong>
          </p>{" "}
        </div>
      </div>
      <div className={styles.breakLine}> </div>
      <div>
        <h1 className={styles.title}> {getPost.title} </h1>
        <div className={styles.markdown}>
          <ReactMarkdown
            className={styles["markdown"]}
            components={{
              img: (props) => (
                <span className={styles.imageWrapper}>
                  <Image
                    className="responsive-image"
                    src={props.src as string}
                    alt={props.alt as string}
                  />
                </span>
              ),
              a: (props) => {
                let { href, children } = props;
                if (!href) href = "";
                if (href.startsWith("https://www.youtube.com/") && children === "video") {
                  return (
                    <iframe
                      className={styles.video}
                      src={
                        "https://www.youtube.com/embed/" +
                        href.replace("https://www.youtube.com/watch?v=", "")
                      }
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  );
                }
                return <Link href={href}>{children}</Link>;
              },
              h6: (props) => (
                <div className={styles.button}>
                  <Link
                    href="/donate"
                    target="_blank"
                    className={`${styles.donateButton} ${styles.inlineDonateButton}`}
                  >
                    {" "}
                    {props.children}{" "}
                  </Link>
                </div>
              ),
              code: (
                props, // I feel really bad for doing this but I kinda had no choice
              ) => <span className={styles.brandText}> {props.children} </span>,
            }}
          >
            {getPost.content}
          </ReactMarkdown>
        </div>
      </div>
      <div className={styles.button}>
        <Link href="/donate" target="_blank" className={styles.donateButton}>
          {" "}
          {getPost.fundraiseText || "Support the Lobstah Bots!"}{" "}
        </Link>
      </div>
      <div className={styles.breakLine}> </div>

      <div className={styles.postNavBar}>
        <div>
          {previousPost ? (
            <Link href={`/blog/${previousPost.slug}`}>
              <ArrowLeftCircle />
              <span>Previous Post</span>
            </Link>
          ) : (
            <div />
          )}
        </div>
        <div>
          {nextPost ? (
            <Link href={`/blog/${nextPost.slug}`}>
              <span>Next Post</span>
              <ArrowRightCircle />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>

      <div className={styles.mediaIcons}>
        <div className={styles.icon}>
          <Link href="https://instagram.com/burobotics246/" target="_blank">
            {" "}
            <Image
              className={`responsive-image ${styles.icon}`}
              width="40"
              height="40"
              alt="Instagram icon"
              src="https://cdn-images.mailchimp.com/icons/social-block-v3/block-icons-v3/instagram-filled-dark-40.png"
            />
          </Link>
        </div>
        <div className={styles.icon}>
          <Link href="mailto:lobstahbots@gmail.com" target="_blank">
            {" "}
            <Image
              className={`responsive-image ${styles.icon}`}
              width="40"
              height="40"
              alt="Email icon"
              src="https://cdn-images.mailchimp.com/icons/social-block-v3/block-icons-v3/email-filled-dark-40.png"
            />{" "}
          </Link>{" "}
        </div>
        <div className={styles.icon}>
          {" "}
          <Link href="https://lobstahbots.com" target="_blank">
            {" "}
            <Image
              className={`responsive-image ${styles.icon}`}
              width="40"
              height="40"
              alt="Website icon"
              src="https://cdn-images.mailchimp.com/icons/social-block-v3/block-icons-v3/website-filled-dark-40.png"
            />{" "}
          </Link>{" "}
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = getPostSlugs();
  return posts.map((post) => ({
    slug: post.replace(/\.md$/, ""),
  }));
}
