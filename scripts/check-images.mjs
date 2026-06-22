import fs from "fs";
import https from "https";

const text = fs.readFileSync("src/data/collections.ts", "utf8");
const imgs = [...text.matchAll(/shopImage\("([^"]+)"/g)].map((m) => m[1]);
const unique = [...new Set(imgs)];

function check(file) {
  return new Promise((resolve) => {
    const separator = file.includes("?") ? "&" : "?";
    const u = `https://foaclothing.com/cdn/shop/files/${file}${separator}width=100`;
    https
      .get(u, (res) => resolve({ file, status: res.statusCode }))
      .on("error", () => resolve({ file, status: "ERR" }));
  });
}

const results = await Promise.all(unique.map(check));
const bad = results.filter((r) => r.status !== 200);
console.log(`Total: ${unique.length}, Bad: ${bad.length}`);
bad.forEach((r) => console.log(r.status, r.file));
