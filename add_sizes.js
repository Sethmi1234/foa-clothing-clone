const fs = require('fs');
const file = 'src/data/collections.ts';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(/(\s+)(colors: \[)/g, '\$1sizes: ["XS", "S", "M", "L", "XL", "2XL"],\$1\$2');
fs.writeFileSync(file, content);
