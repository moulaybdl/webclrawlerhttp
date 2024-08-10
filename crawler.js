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

async function crawlPage(baseURL, currentURL = baseURL, pages = {}) {
  // Base page:
  const baseURLObj = new URL(baseURL);
  const currentURLOBJ = new URL(currentURL);

  if (baseURLObj.hostname != currentURLOBJ.hostname) return pages;
  const normalizedURL = normalizeURL(currentURL);

  if (normalizedURL in pages) {
    pages[normalizedURL] += 1;
    return pages;
  } else {
    pages[normalizedURL] = 1;
  }
  // Fetching the url page:
  try {
    const htmlBodyResp = await fetch(currentURL);

    if (htmlBodyResp.status > 399) {
      console.error("error occured while fetching");
      return pages;
    }
    if (!htmlBodyResp.headers.get("content-type").includes("text/html")) {
      return pages;
    }

    const htmlBody = await htmlBodyResp.text();
    const listOfURL = getURLsFromHTML(htmlBody, baseURL);

    listOfURL.forEach(async (url) => {
      pages = await crawlPage(baseURL, url, pages);
    });
  } catch (err) {
    console.error("Fetch method could not be resolved");
  }
  return pages;
}

module.exports = { normalizeURL, getURLsFromHTML, crawlPage };
