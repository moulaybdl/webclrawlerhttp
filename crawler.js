const url = require("node:url");
function normalizeURL(urlStr) {
  const urlObj = url.parse(urlStr);
  var result =
    urlObj.pathname.charAt(urlObj.pathname.length - 1) == "/"
      ? urlObj.pathname
      : urlObj.pathname + "/";
  return `${urlObj.hostname}${result}`;
}

module.exports = { normalizeURL };
