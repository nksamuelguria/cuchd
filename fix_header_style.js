const fs = require('fs');
let content = fs.readFileSync('src/components/Header.tsx', 'utf8');

// Replace <style> with <style>{` and </style> with `}</style>
content = content.replace(/<style>/g, '<style>{`');
content = content.replace(/<\/style>/g, '`}</style>');

// Also check for unescaped characters in JSX like inline styles or class instead of className
// Some attributes like style={{ animation: `borderMove 3s linear infinite` }} inside the style tag might conflict if we aren't careful, but here it's raw text inside template literal so it's fine unless it contains backticks or ${}.

fs.writeFileSync('src/components/Header.tsx', content);
