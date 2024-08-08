const { normalizeURL, getURLsFromHTML } = require("./crawler.js");
const { test, expect } = require("@jest/globals");

test("Test 1", () => {
  const input = "https://blog.boot.dev/path/";
  const output = normalizeURL(input);
  const expected = "blog.boot.dev/path";
  expect(output).toEqual(expected);
});

test("Test 2", () => {
  const input = "https://blog.boot.dev/path";
  const output = normalizeURL(input);
  const expected = "blog.boot.dev/path";
  expect(output).toEqual(expected);
});

test("Test 3", () => {
  const input = "http://blog.boot.dev/path/";
  const output = normalizeURL(input);
  const expected = "blog.boot.dev/path";
  expect(output).toEqual(expected);
});

test("Test 5", () => {
  baseUrl = "https://blog.boot.dev/";
  const input = `
  <html>
    <body>
      <a href = "https://blog.boot.dev/path1" ></a>
    </body>
  <html>
  `;

  const output = getURLsFromHTML(input, baseUrl);
  const expected = ["https://blog.boot.dev/path1"];

  expect(output).toEqual(expected);
});

test("Test 6", () => {
  baseUrl = "https://blog.boot.dev";
  const input = `
  <html>
    <body>
      <a href = "/path1"></a>
    </body>
  <html>
  `;

  const output = getURLsFromHTML(input, baseUrl);
  const expected = ["https://blog.boot.dev/path1"];

  expect(output).toEqual(expected);
});

test("Test 7", () => {
  baseUrl = "https://blog.boot.dev";
  const input = `
  <html>
    <body>
      <a href = "https://blog.boot.dev/path1"></a>
      <a href = "https://blog.boot.dev/path2"></a>
    </body>
  <html>
  `;

  const output = getURLsFromHTML(input, baseUrl);
  const expected = [
    "https://blog.boot.dev/path1",
    "https://blog.boot.dev/path2",
  ];

  expect(output).toEqual(expected);
});

test("Test 7", () => {
  baseUrl = "https://blog.boot.dev";
  const input = `
  <html>
    <body>
      <a href = "/path1"></a>
      <a href = "/path2"></a>
    </body>
  <html>
  `;

  const output = getURLsFromHTML(input, baseUrl);
  const expected = [
    "https://blog.boot.dev/path1",
    "https://blog.boot.dev/path2",
  ];

  expect(output).toEqual(expected);
});
