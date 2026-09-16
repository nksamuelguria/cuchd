const fs = require("fs");
let content = fs.readFileSync("src/components/Header.tsx", "utf8");

content = content.replace("</nav>\n  </div>\n  <div className=\"collapse\"", "</nav>\n  <div className=\"collapse\"");
content = content.replace("</nav>\r\n  </div>\r\n  <div className=\"collapse\"", "</nav>\r\n  <div className=\"collapse\"");

fs.writeFileSync("src/components/Header.tsx", content);
console.log("Extra div removed!");
