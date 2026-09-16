const fs = require("fs");

let css = fs.readFileSync("src/components/header.css", "utf8");

// Remove CSS zoom properties that trigger incorrect responsive breakpoints
css = css.replace(/zoom:\s*\d+%;?/gi, "");

fs.writeFileSync("src/components/header.css", css);
console.log("Cleaned zoom properties from header.css!");
