const { NormalizeURL } = require("./crawler.js");
const { test, expect } = require("@jest/globals");

test("normalizeURL", () => {
  const input = "";
  const output = NormalizeURL(input);
  const expected = "";
  expect(output).toEqual(expected);
});
