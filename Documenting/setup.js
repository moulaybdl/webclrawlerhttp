//* 1. Setting up node version
//? npm -> Node Package Manager -> manage javascript packages and depandencier + specify "scripts" to run
//? nvm -> Node Version Manager -> manage the versions of node in the project (install, switch ...)
//? node -> Run time env for js files -> node main.js

//TODO: Setting the node version for the project:
//? 1. create a file with the name: .nvmrc in the root file
//? 2. then run the command nvm use <version>
//? 3. check the version with :
//! node --version

//TODO: Setting new node project: Once the version is ready:
//? run the command: to set node project
//! npm init
//? we may notice that node_modules added to our directory, which contains all our dependencies

//TODO: Running the project:
//? we can now add main.js file to our root file
//? to execute the file we run the command:
//! node main.js
//? To make it easier we add script to package.json
//? in the "script" property add:
//! "start": "node main.js"
//? and now to run a script we preceed it by npm:
//! npm <script> -> npm start <=> node main.js

//TODO: How to test our app ?
//? we use a library called Jest (js library)
//? Let's intall using npm:
//! npm install jest --save-dev
//? Note that -dev is used so that our library is added to the devDependencies instead of Dependencies
//? devDepencies are only required during developement (but not running)

//! Configure a test command:
//! "script" :{ ... "test": jest }

//TODO: set-up test files to test our function:
//? Jest will parse the root and look for any files ending with .test.js
//? inside the .test.js import the function to test and the Jest function to test:
//! import {test, expect} from "@jset/globals";
//! import {normalize} from "./crawler.js"
//? this is schema of the .test.js file:
test("nameOfTest", () => {
  const input = "";
  const output = fun();
  const expected = "";
  expected(output).toEqual(expected);
});
//? then run the command:
//! npm test
