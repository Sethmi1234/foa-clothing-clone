const fs = require('fs');
const html = fs.readFileSync('raw.html', 'utf8');

// Try to find sections
const headings = html.match(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi);
if (headings) {
  console.log("Headings found:");
  headings.forEach(h => console.log(h.replace(/<[^>]*>/g, '').trim()));
} else {
  console.log("No headings found");
}

// Find images
const imgs = html.match(/<img[^>]+src="([^"]+)"/gi);
console.log("\nTotal images:", imgs ? imgs.length : 0);
