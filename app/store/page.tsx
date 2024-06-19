import Script from "next/script";
import "./shop.css";

export const metadata = {
  title: "Store",
};

export default function Store() {
  return (
    <>
      <main>
        <div id="lobstahbotsStore">Loading store...</div>
      </main>
      <Script type="text/javascript" src="/js/shop.js" strategy="lazyOnload" />
    </>
  );
}
