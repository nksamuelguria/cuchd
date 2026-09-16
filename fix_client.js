const fs = require("fs");
let content = fs.readFileSync("src/components/Header.tsx", "utf8");

content = content.replace(/"use client";\s*/g, "");
content = content.replace(/\x27use client\x27;\s*/g, "");
content = `"use client";\n` + content;

fs.writeFileSync("src/components/Header.tsx", content);
console.log("use client directive fixed!");
