function printReport(pages = {}) {
  console.log("STARTING TO PRINT THE REPORT ...");

  let arrayFromObject = Object.entries(pages);

  // Sorting the array:
  arrayFromObject.sort((a, b) => {
    return b[1] - a[1];
  });

  arrayFromObject.forEach((el) => {
    console.log(`Found ${el[1]} internal links to ${el[0]}`);
  });
}

module.exports = { printReport };
