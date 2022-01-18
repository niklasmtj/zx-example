#!/usr/bin/env zx
$.verbose = false;
let filename = await question("What is the filename? ");
let template = await question("What is your preferred template? ", {
  choices: ["function", "class"], // Enables tab completion.
});
let content = "";

if (template == "function") {
  content = `function main() {
    console.log("Test");
}`;
} else if (template == "class") {
  content = `class Main {
    constructor() {
        console.log("Test");
    }
}`;
} else {
  console.error(`Invalid template: ${template}`);
  process.exit();
}
fs.outputFileSync(filename, content);
