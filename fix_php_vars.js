const fs = require('fs');
let content = fs.readFileSync('src/components/Header.tsx', 'utf8');

const vars = {
  'highestpackage': '1.7',
  'nationalpackage': '59.9',
  'placements': '10000+',
  'companies': '1300+',
  'year': 'Batch 2024-25',
  'tieups': '530+',
  'countries': '100',
  'patents': '5900+',
  'startups': '250+',
  'publishedJournals': '24000+',
  'waltDisney': '370+',
  'researchCenter': '60'
};

content = content.replace(/<\?=\s*@?\$([a-zA-Z0-9_]+)\s*\?>/g, (match, p1) => {
  return vars[p1] || '';
});

// Just in case there are any remaining <?php blocks
content = content.replace(/<\?php[\s\S]*?\?>/g, '');

fs.writeFileSync('src/components/Header.tsx', content);
