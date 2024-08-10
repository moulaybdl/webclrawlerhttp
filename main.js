const { argv } = require("node:process");
const { crawlPage } = require("./crawler.js");

async function main() {
  console.log(await crawlPage(process.argv[2]));
}

main();
