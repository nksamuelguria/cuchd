const fs = require("fs");
let content = fs.readFileSync("src/components/Footer.tsx", "utf8");
content = content.replace(/<!--[\s\S]*?-->/g, "");
fs.writeFileSync("src/components/Footer.tsx", content);
console.log("HTML comments removed!");
