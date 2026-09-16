const fs = require("fs");

let content = fs.readFileSync("temp_footer.html", "utf8");

// Cut off scripts part (after gotoTop)
const scriptsIndex = content.indexOf("<!-- javascripts files -->");
if (scriptsIndex !== -1) {
    content = content.substring(0, scriptsIndex);
}

// Convert HTML to JSX manually and cleanly
content = content
    .replace(/class=/g, "className=")
    .replace(/for=/g, "htmlFor=")
    .replace(/tabindex=/g, "tabIndex=")
    .replace(/aria-label=/g, "aria-label=")
    .replace(/aria-hidden=/g, "aria-hidden=")
    .replace(/aria-labelledby=/g, "aria-labelledby=")
    .replace(/data-bs-dismiss=/g, "data-bs-dismiss=")
    .replace(/data-bs-toggle=/g, "data-bs-toggle=")
    .replace(/data-bs-target=/g, "data-bs-target=")
    .replace(/value=""/g, "defaultValue=\"\"")
    .replace(/<br>/g, "<br />")
    .replace(/<hr>/g, "<hr />")
    .replace(/<img([^>]*?)\/?>/g, (m, p1) => {
        if (!p1.endsWith("/")) return `<img${p1} />`;
        return m;
    })
    .replace(/<input([^>]*?)\/?>/g, (m, p1) => {
        if (!p1.endsWith("/")) return `<input${p1} />`;
        return m;
    })
    // Fix image paths
    .replace(/\.\.\/includes\/assets\/images\/header-footer\//g, "/header-footer/")
    .replace(/\.\.\/includes\/assets\/images\//g, "/header-footer/")
    .replace(/includes\/assets\/images\/header-footer\//g, "/header-footer/")
    .replace(/includes\/assets\/images\//g, "/header-footer/");

const component = `import "./footer.css";

export default function Footer() {
  return (
    <>
${content}
    </>
  );
}
`;

fs.writeFileSync("src/components/Footer.tsx", component);
console.log("Clean Footer.tsx generated!");
