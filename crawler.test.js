const { normalizeURL } = require("./crawler.js");
const { test, expect } = require("@jest/globals");

test("Test 1", () => {
  const input = "https://blog.boot.dev/path/";
  const output = normalizeURL(input);
  const expected = "blog.boot.dev/path/";
  expect(output).toEqual(expected);
});

test("Test 2", () => {
  const input = "https://blog.boot.dev/path";
  const output = normalizeURL(input);
  const expected = "blog.boot.dev/path/";
  expect(output).toEqual(expected);
});

test("Test 3", () => {
  const input = "http://blog.boot.dev/path/";
  const output = normalizeURL(input);
  const expected = "blog.boot.dev/path/";
  expect(output).toEqual(expected);
});

test("Test 4", () => {
  const input = "http://blog.boot.dev/path";
  const output = normalizeURL(input);
  const expected = "blog.boot.dev/path/";
  expect(output).toEqual(expected);
});
