const fs = require("fs");
let content = fs.readFileSync("src/components/Footer.tsx", "utf8");

let cssContent = "";
const styleRegex = /<style[^>]*dangerouslySetInnerHTML=\{\{__html:\s*("[^"]*"|`[^`]*`|{[^}]*})\s*\}\}[^>]*\/>/g;

let match;
while ((match = styleRegex.exec(content)) !== null) {
    let rawCss = match[1];
    if (rawCss.startsWith(`"`) || rawCss.startsWith("`")) {
        try {
            let css = JSON.parse(rawCss.replace(/\`/g, `"`));
            cssContent += css + "\n\n";
        } catch (e) {
            cssContent += rawCss.slice(1, -1) + "\n\n";
        }
    }
}

// Write to footer.css
fs.writeFileSync("src/components/footer.css", cssContent);

// Remove <style> tags from Footer.tsx
content = content.replace(styleRegex, "");
if (!content.includes(`import "./footer.css";`)) {
    content = `import "./footer.css";\n` + content;
}

fs.writeFileSync("src/components/Footer.tsx", content);
console.log("Footer CSS extracted!");
