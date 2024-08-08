const { argv } = require("node:process");
const { crawlPage } = require("./crawler.js");

function main() {
  console.log(crawlPage(process.argv[2], process.argv[2]));
}

main();
