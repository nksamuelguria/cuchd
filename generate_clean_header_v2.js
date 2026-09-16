const fs = require("fs");
const { execSync } = require("child_process");

let content = fs.readFileSync("c:/xampp/htdocs/cu/html/includes/header-2025.php", "utf8");

// Remove PHP blocks
content = content.replace(/<\?php[\s\S]*?\?>/g, "");
content = content.replace(/<\?=[\s\S]*?\?>/g, "");

// Remove <style> blocks
content = content.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "");

fs.writeFileSync("temp_header_clean.html", content);

// Run htmltojsx
execSync("npx htmltojsx temp_header_clean.html > temp_header_clean.jsx");

let jsx = fs.readFileSync("temp_header_clean.jsx", "utf8");

// Fix image paths
jsx = jsx
    .replace(/\.\.\/includes\/assets\/images\/header-footer\//g, "/header-footer/")
    .replace(/\.\.\/includes\/assets\/images\//g, "/header-footer/")
    .replace(/includes\/assets\/images\/header-footer\//g, "/header-footer/")
    .replace(/includes\/assets\/images\//g, "/header-footer/")
    .replace(/"header-footer\//g, "\"/header-footer/")
    .replace(/"latest-assets\//g, "\"/latest-assets/");

// Fix boolean attributes
jsx = jsx
    .replace(/ alt /g, " alt=\"\" ")
    .replace(/ rel /g, " rel=\"\" ")
    .replace(/ width /g, " ")
    .replace(/ alt \/>/g, " alt=\"\" />")
    .replace(/ rel\/>/g, " rel=\"\" />")
    .replace(/ alt\s*className=/g, " alt=\"\" className=")
    .replace(/ data-src/g, " src")
    .replace(/ lazy-img/g, "");

// Replace carousel JSX with HeaderSlider
const carouselJsxRegex = /<div id="carouselExampleAutoplaying"[\s\S]*?<\/div>\s*<\/div>/;
if (carouselJsxRegex.test(jsx)) {
    jsx = jsx.replace(carouselJsxRegex, "<HeaderSlider />");
}

const component = `"use client";

import React, { useEffect } from 'react';
import HeaderSlider from "./HeaderSlider";
import "./header.css";

export default function Header() {
  useEffect(() => {
    const lazyBgs = document.querySelectorAll('[data-bg]');
    lazyBgs.forEach(bg => {
      if (bg instanceof HTMLElement && bg.dataset.bg) {
        bg.style.backgroundImage = "url(" + bg.dataset.bg + ")";
      }
    });
  }, []);

  return (
    <>
${jsx}
    </>
  );
}
`;

fs.writeFileSync("src/components/Header.tsx", component);
console.log("Header.tsx generated cleanly via htmltojsx!");
