const fs = require('fs');
let content = fs.readFileSync('src/components/Header.tsx', 'utf8');

const tags = ['img', 'input', 'br', 'hr', 'source', 'meta', 'link'];
tags.forEach(tag => {
  const regex = new RegExp('<' + tag + '([^>]*?)(?<!/)>', 'gi');
  content = content.replace(regex, '<' + tag + '$1 />');
});

fs.writeFileSync('src/components/Header.tsx', content);
