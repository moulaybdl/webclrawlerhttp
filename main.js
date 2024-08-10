const { argv } = require("node:process");
const { crawlPage } = require("./crawler.js");
const { printReport } = require("./report.js");

async function main() {
  printReport(await crawlPage(process.argv[2]));
}

main();
