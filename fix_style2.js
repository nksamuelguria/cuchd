const fs = require('fs');
let content = fs.readFileSync('src/components/Header.tsx', 'utf8');

// The script previously replaced `</style>` with `\`}</style>`.
// So we just need to ensure `<style type="text/css">` becomes `<style type="text/css">{\``.
content = content.replace(/<style type="text\/css">/g, '<style type="text/css">{`');

fs.writeFileSync('src/components/Header.tsx', content);
