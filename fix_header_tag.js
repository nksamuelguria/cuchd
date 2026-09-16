const fs = require("fs");
let content = fs.readFileSync("src/components/Header.tsx", "utf8");

content = content.replace("</nav>\n    </div>\n    <div className=\"hidden\" id=\"navbarToggleExternalContent\">", "</nav>\n    <div className=\"hidden\" id=\"navbarToggleExternalContent\">");
content = content.replace("</nav>\r\n    </div>\r\n    <div className=\"hidden\" id=\"navbarToggleExternalContent\">", "</nav>\r\n    <div className=\"hidden\" id=\"navbarToggleExternalContent\">");

fs.writeFileSync("src/components/Header.tsx", content);
console.log("Extra div removed!");
