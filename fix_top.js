const fs = require('fs');
let content = fs.readFileSync('src/components/Hero.tsx', 'utf8');

// Remove existing "use client"; and /* eslint-disable ... */
content = content.replace(/\/\* eslint-disable @typescript-eslint\/no-explicit-any \*\/\n/g, '');
content = content.replace(/"use client";\n/g, '');

// Prepend them in correct order
content = '"use client";\n/* eslint-disable @typescript-eslint/no-explicit-any */\n' + content;

fs.writeFileSync('src/components/Hero.tsx', content);
