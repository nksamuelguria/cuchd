const fs = require('fs');

let html = fs.readFileSync('html/includes/header-2025.php', 'utf8');

// 1. Remove PHP blocks
html = html.replace(/<\?php[\s\S]*?\?>/g, '');

// 2. Remove HTML comments (except if they are inside JSX but it's easier to just remove them)
html = html.replace(/<!--[\s\S]*?-->/g, '');

// 3. Rename class to className
html = html.replace(/\bclass="/g, 'className="');

// 4. Fix self-closing tags
html = html.replace(/<(img|input|br|hr|source|meta|link)\b([^>]*?)(?<!\/)>/gi, '<$1$2 />');

// 5. Convert inline styles
html = html.replace(/\bstyle="([^"]+)"/g, function(match, styleStr) {
    let styleObj = {};
    styleStr.split(';').forEach(rule => {
        let parts = rule.split(':');
        if (parts.length >= 2) {
            let key = parts[0].trim().replace(/-([a-z])/gi, (m, g1) => g1.toUpperCase());
            // Support for background-image with colon (e.g. url('http://...'))
            let val = parts.slice(1).join(':').trim();
            // React styles are objects
            styleObj[key] = val;
        }
    });
    let styleString = Object.entries(styleObj).map(([k, v]) => `${k}: \`${v}\``).join(', ');
    return `style={{ ${styleString} }}`;
});

// 6. Fix specific JSX attributes
html = html.replace(/\bfor="/g, 'htmlFor="');
html = html.replace(/\bmaxlength="/g, 'maxLength="');
html = html.replace(/\bautocomplete="/g, 'autoComplete="');
html = html.replace(/\btabindex="/g, 'tabIndex="');
html = html.replace(/\baria-expanded="/g, 'aria-expanded="'); // Valid in React
html = html.replace(/\baria-controls="/g, 'aria-controls="'); // Valid
html = html.replace(/\baria-label="/g, 'aria-label="'); // Valid
html = html.replace(/\bfill-rule="/g, 'fillRule="'); 
html = html.replace(/\bclip-rule="/g, 'clipRule="');
html = html.replace(/\bstroke-width="/g, 'strokeWidth="');
html = html.replace(/\bstroke-linecap="/g, 'strokeLinecap="');
html = html.replace(/\bstroke-linejoin="/g, 'strokeLinejoin="');
html = html.replace(/\bxmlns:xlink="/g, 'xmlnsXlink="');
html = html.replace(/\bxml:space="/g, 'xmlSpace="');

// 7. Fix image paths to point to Next.js public folder
// If it contains header-footer, make it /header-footer/
html = html.replace(/(src|data-src|href)="[^"]*?header-footer\/(.*?)"/g, '$1="/header-footer/$2"');
html = html.replace(/(src|data-src|href)="[^"]*?latest-assets\/(.*?)"/g, '$1="/latest-assets/$2"');

// 8. Wrap inside React component
let jsx = `
"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';

export default function Header() {
  useEffect(() => {
     // Header interactions can go here if needed.
  }, []);

  return (
    <>
      ${html}
    </>
  );
}
`;

fs.writeFileSync('src/components/Header.tsx', jsx);
