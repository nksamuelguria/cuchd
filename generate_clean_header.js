const fs = require("fs");

let content = fs.readFileSync("c:/xampp/htdocs/cu/html/includes/header-2025.php", "utf8");

// Remove PHP blocks
content = content.replace(/<\?php[\s\S]*?\?>/g, "");
content = content.replace(/<\?=[\s\S]*?\?>/g, "");

// Remove <style> blocks (since they are in header.css)
content = content.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "");

// Replace the old Bootstrap carousel section with <HeaderSlider />
content = content.replace(/<div class="headerTopSlider position-relative">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/gi, "<HeaderSlider />");

// Convert HTML to JSX cleanly
content = content
    .replace(/class=/g, "className=")
    .replace(/for=/g, "htmlFor=")
    .replace(/tabindex=/g, "tabIndex=")
    .replace(/tabIndex="-1"/g, "tabIndex={-1}")
    .replace(/aria-label=/g, "aria-label=")
    .replace(/aria-hidden=/g, "aria-hidden=")
    .replace(/aria-expanded=/g, "aria-expanded=")
    .replace(/aria-controls=/g, "aria-controls=")
    .replace(/aria-labelledby=/g, "aria-labelledby=")
    .replace(/data-bs-dismiss=/g, "data-bs-dismiss=")
    .replace(/data-bs-toggle=/g, "data-bs-toggle=")
    .replace(/data-bs-target=/g, "data-bs-target=")
    .replace(/data-bs-interval=/g, "data-bs-interval=")
    .replace(/data-bs-ride=/g, "data-bs-ride=")
    .replace(/data-bs-slide=/g, "data-bs-slide=")
    .replace(/data-lenis-prevent-wheel/g, "data-lenis-prevent-wheel=\"true\"")
    .replace(/value=""/g, "defaultValue=\"\"")
    .replace(/<br>/g, "<br />")
    .replace(/<hr>/g, "<hr />")
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<img([^>]*?)\/?>/g, (m, p1) => {
        if (!p1.endsWith("/")) return `<img${p1} />`;
        return m;
    })
    .replace(/<input([^>]*?)\/?>/g, (m, p1) => {
        if (!p1.endsWith("/")) return `<input${p1} />`;
        return m;
    })
    // Fix inline styles
    .replace(/style="([^"]*)"/g, (m, styleStr) => {
        const rules = styleStr.split(";").filter(r => r.trim());
        const objProps = rules.map(r => {
            let [k, ...vParts] = r.split(":");
            let v = vParts.join(":").trim();
            if (!k || !v) return "";
            k = k.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
            return `${k}: "${v.replace(/"/g, "\\\"")}"`;
        }).filter(Boolean).join(", ");
        return `style={{ ${objProps} }}`;
    })
    // Fix numeric attributes on img
    .replace(/height="(\d+)"/g, "height={$1}")
    .replace(/width="(\d+)"/g, "width={$1}")
    // Fix image paths
    .replace(/\.\.\/includes\/assets\/images\/header-footer\//g, "/header-footer/")
    .replace(/\.\.\/includes\/assets\/images\//g, "/header-footer/")
    .replace(/includes\/assets\/images\/header-footer\//g, "/header-footer/")
    .replace(/includes\/assets\/images\//g, "/header-footer/")
    .replace(/"header-footer\//g, "\"/header-footer/")
    .replace(/"latest-assets\//g, "\"/latest-assets/");

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
${content}
    </>
  );
}
`;

fs.writeFileSync("src/components/Header.tsx", component);
console.log("Clean Header.tsx generated with 3 closing divs match!");
