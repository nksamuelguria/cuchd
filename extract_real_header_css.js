const fs = require("fs");

let content = fs.readFileSync("c:/xampp/htdocs/cu/html/includes/header-2025.php", "utf8");

const matches = content.match(/<style[^>]*>([\s\S]*?)<\/style>/gi);

let fullCss = "";
if (matches) {
    matches.forEach(m => {
        let css = m.replace(/<style[^>]*>/i, "").replace(/<\/style>/i, "");
        fullCss += css + "\n\n";
    });
}

fs.writeFileSync("src/components/header.css", fullCss);
console.log("Extracted " + fullCss.length + " bytes of CSS into header.css!");
