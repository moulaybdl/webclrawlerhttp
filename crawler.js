const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const url = require("node:url");
function normalizeURL(urlStr) {
  const urlObj = url.parse(urlStr);
  var result = `${urlObj.hostname}${urlObj.pathname}`;
  if (result.length > 0 && result[-1] === "/") {
    result = result.slice(0, -1);
  }
  return result.toLowerCase();
}

function getURLsFromHTML(htmlBody, baseURL) {
  const dom = new JSDOM(htmlBody, {
    url: baseURL,
  });

  let anchors = Array.from(dom.window.document.querySelectorAll("a"));
  let urls = anchors.map((anchor_el) => anchor_el.getAttribute("href"));
  return urls;
}

getURLsFromHTML(
  `<a href="https://boot.dev">Learn Backend Development</a>
  <a href="https://boot.dev/folder1/index.html"></a>
  `,
  "https://boot.dev"
).forEach((element) => {
  console.log(element);
});

module.exports = { normalizeURL };
