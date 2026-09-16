const fs = require('fs');
let content = fs.readFileSync('src/components/Hero.tsx', 'utf8');

// fix <br> -> <br />
content = content.replace(/<br>/g, '<br />');

// fix <!-- ... --> to {/* ... */}
content = content.replace(/<!--(.*?)-->/g, '{/* $1 */}');

// fix charset="utf-8" to charSet="utf-8"
content = content.replace(/charset=/g, 'charSet=');

// Fix global window typings by removing 'window.' or using (window as any) if it's not TS. It's a .tsx file so TS will complain about window.$
content = content.replace(/window\.\$/g, '(window as any).$');
content = content.replace(/onload="window/g, 'onLoad={() => (window as any)');
content = content.replace(/bootstrapLSQWidget\(event\)"/g, "bootstrapLSQWidget(event)}");

fs.writeFileSync('src/components/Hero.tsx', content);
