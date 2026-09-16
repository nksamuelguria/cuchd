const fs = require("fs");
let content = fs.readFileSync("src/components/Footer.tsx", "utf8");

// Convert inline style string to object in JSX
content = content.replace(/style="([^"]*)"/g, (m, styleStr) => {
    const rules = styleStr.split(";").filter(r => r.trim());
    const objProps = rules.map(r => {
        let [k, v] = r.split(":").map(s => s.trim());
        if (!k || !v) return "";
        // convert kebab-case to camelCase
        let camelK = k.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
        return `${camelK}: "${v.replace(/"/g, "\\\"")}"`;
    }).filter(Boolean).join(", ");
    return `style={{ ${objProps} }}`;
});

// Convert height="12" or width="110" on img if needed or keep as string/number
content = content.replace(/height="(\d+)"/g, "height={$1}");
content = content.replace(/width="(\d+)"/g, "width={$1}");

fs.writeFileSync("src/components/Footer.tsx", content);
console.log("Footer inline styles and numeric props converted!");
