const fs = require("fs");
let content = fs.readFileSync("src/components/Header.tsx", "utf8");

content = content.replace(/<HeaderSlider \/>[\s\S]*?<button[\s\S]*?<\/button>\s*<\/div>/, "<HeaderSlider />");
fs.writeFileSync("src/components/Header.tsx", content);
console.log("Header HTML fixed via regex!");
