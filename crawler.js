const jsdom = require("jsdom");
const { get } = require("node:http");
const { JSDOM } = jsdom;
const url = require("node:url");

function normalizeURL(urlStr) {
  const urlObj = url.parse(urlStr);
  var result = `${urlObj.hostname}${urlObj.pathname}`;
  if (result.length > 0 && result.slice(-1) === "/") {
    console.log("inside");
    result = result.slice(0, -1);
  }
  return result.toLowerCase();
}

function getURLsFromHTML(htmlBody, baseURL) {
  const dom = new JSDOM(htmlBody, {
    url: baseURL,
  });

  let anchors = Array.from(dom.window.document.querySelectorAll("a"));
  var urls = anchors.map((anchor_el) => anchor_el.getAttribute("href"));

  return urls
    .map((el) => {
      try {
        const urlObj = url.parse(el);
        if (el.charAt(0) === "/") {
          return `${baseURL}${el}`;
        } else {
          return el;
        }
      } catch (err) {
        // console.log("exception");
        return "invalid";
      }
    })
    .filter((el) => el !== "invalid");
}

console.log(
  getURLsFromHTML(
    `
  <html>
    <body>
      <a href = "invalid"></a>
    </body>
  <html>
  `,
    "https://blog.boot.dev"
  )
);

module.exports = { normalizeURL, getURLsFromHTML };
