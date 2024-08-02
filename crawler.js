const url = require("node:url");
function normalizeURL(urlStr) {
  const urlObj = url.parse(urlStr);
  var result = `${urlObj.hostname}${urlObj.pathname}`;
  if (result.length > 0 && result[-1] === "/") {
    result = result.slice(0, -1);
  }
  return result.toLowerCase();
}

module.exports = { normalizeURL };
