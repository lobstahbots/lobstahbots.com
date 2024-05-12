import Link from "next/link";

export const metadata = {
  title: "404 Not Found",
};

export default function NotFound() {
  return (
    <div className="container">
      <h1>404 &ndash; Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <p>Try going to <Link className="link" href="/">our homepage</Link> or to see our <Link className="link" href="/blog">latest posts</Link>.</p>
    </div>
  );
}
