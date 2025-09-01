const spread_shop_config = {
  shopName: "lobstahbots",
  prefix: "https://lobstahbots.myspreadshop.com",
  baseId: "lobstahbotsStore",
};
window.spread_shop_config = spread_shop_config;
import(`${spread_shop_config.prefix}/js/shopclient.nocache.js`).then(() =>
  document.dispatchEvent(new Event("DOMContentLoaded")),
);
