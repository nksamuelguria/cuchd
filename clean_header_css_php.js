const fs = require("fs");

let css = fs.readFileSync("src/components/header.css", "utf8");

// Remove any PHP blocks or PHP comments inside CSS
css = css.replace(/<\?php[\s\S]*?\?>/g, "");
css = css.replace(/<\?=[\s\S]*?\?>/g, "");

fs.writeFileSync("src/components/header.css", css);
console.log("header.css cleaned of PHP tags!");
