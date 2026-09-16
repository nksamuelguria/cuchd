const fs = require("fs");

const extraCss = `
.allNotification__icon i {
    position: unset;
    transform: unset;
}    
.fa-bell.bell:before {
    content: "\\f0f3";
} 
.fa-bell:before {
    content: "\\f00d";
}
.fa-snapchat { position: relative; top: 2px; }
`;

fs.writeFileSync("src/components/footer.css", extraCss);

let content = fs.readFileSync("src/components/Footer.tsx", "utf8");
content = content.replace(/<style>[\s\S]*?<\/style>/g, "");

fs.writeFileSync("src/components/Footer.tsx", content);
console.log("Footer style extracted to footer.css cleanly!");
