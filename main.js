const { argv } = require("node:process");
const { crawlPage } = require("./crawler.js");

function main() {
  crawlPage(process.argv[2]);
}

main();
