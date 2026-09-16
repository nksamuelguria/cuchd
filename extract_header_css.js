const fs = require("fs");
let content = fs.readFileSync("src/components/Header.tsx", "utf8");

let cssContent = "";
const styleRegex = /<style[^>]*dangerouslySetInnerHTML=\{\{__html:\s*("[^"]*"|`[^`]*`|{[^}]*})\s*\}\}[^>]*\/>/g;

let match;
while ((match = styleRegex.exec(content)) !== null) {
    let rawCss = match[1];
    if (rawCss.startsWith(`"`) || rawCss.startsWith("`")) {
        try {
            // Evaluated string
            let css = JSON.parse(rawCss.replace(/\`/g, `"`));
            cssContent += css + "\n\n";
        } catch (e) {
            cssContent += rawCss.slice(1, -1) + "\n\n";
        }
    }
}

// Write to header.css
fs.writeFileSync("src/components/header.css", cssContent);

// Remove <style> tags from Header.tsx
content = content.replace(styleRegex, "");
if (!content.includes(`import "./header.css";`)) {
    content = `import "./header.css";\n` + content;
}

fs.writeFileSync("src/components/Header.tsx", content);
console.log("Header CSS extracted!");
