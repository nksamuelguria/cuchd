const fs = require("fs");
let content = fs.readFileSync("src/components/Header.tsx", "utf8");

if (!content.includes(`import HeaderSlider from "./HeaderSlider";`)) {
    content = `import HeaderSlider from "./HeaderSlider";\n` + content;
}

const sliderRegex = /<div className="headerTopSlider relative">[\s\S]*?<\/div>\s*<\/div>/;
content = content.replace(sliderRegex, `<HeaderSlider />`);

fs.writeFileSync("src/components/Header.tsx", content);
console.log("Header slider replaced!");
