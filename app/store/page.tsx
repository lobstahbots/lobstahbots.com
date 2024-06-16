import Script from "next/script";
import "./shop.css";

export const metadata = {
  title: "Store",
};

export default function Store() {
  return (
    <>
      <main>
        <script id="spread_shop_config" dangerouslySetInnerHTML={ { __html:
        `var spread_shop_config = {
	shopName: 'lobstahbots',
	prefix: 'https://lobstahbots.myspreadshop.com',
	baseId: 'lobstahbotsStore',
};` }}/>
        <div id="lobstahbotsStore">Loading store...</div>
      </main>
      <Script type="text/javascript" src="/js/shop.js" strategy="lazyOnload" />
    </>
  );
}
