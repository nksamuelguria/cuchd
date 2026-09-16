const fs = require('fs');
let content = fs.readFileSync('src/components/Hero.tsx', 'utf8');

content = content.replace(/onLoad=\{\(\) => \(window as any\)\['___lsq-portal-widget-helpers___'\]\.bootstrapLSQWidget\(event\)\}/g, "onLoad={(event) => (window as any)['___lsq-portal-widget-helpers___'].bootstrapLSQWidget(event)}");
fs.writeFileSync('src/components/Hero.tsx', content);
