const jsdom = require("jsdom");
const { Console } = require("node:console");
const { get } = require("node:http");
const { exit } = require("node:process");
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

async function crawlPage(currentURL) {
  fetch(currentURL, {
    method: "GET",
    mode: "cors",
    headers: {},
  })
    .then(async (msg) => {
      if (msg.headers.get("content-type") === "text/html") exit(1);
      const HTMLBody = await msg.text();
      console.log(HTMLBody);
    })
    .catch((msg) => {
      exit(1);
    });
}

module.exports = { normalizeURL, getURLsFromHTML, crawlPage };
