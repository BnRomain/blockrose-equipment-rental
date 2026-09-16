// Consistency checks of the static site, run by `npm run check` and by the CI.
//
// - every local file referenced by the pages (stylesheets, scripts, images, other pages) exists;
// - file names stay in ASCII kebab-case (accented or spaced names break URLs);
// - the images stay under the weight budget.

import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import process from "node:process";

const PAGES_DIR = "pages";
const IMAGE_DIR = "images";
const IMAGE_BUDGET_KB = 700;
const NAME_PATTERN = /^[a-z0-9]+(?:[-_.][a-z0-9]+)*\.[a-z0-9]+$/i;

let errors = 0;
const fail = (message) => {
  errors += 1;
  console.error(`ERROR ${message}`);
};

const pages = ["index.html", ...readdirSync(PAGES_DIR).filter((name) => name.endsWith(".html")).map((name) => join(PAGES_DIR, name))];
for (const page of pages) {
  const html = readFileSync(page, "utf8");
  const references = [...html.matchAll(/\b(?:src|href)="([^"]+)"/g)].map((match) => match[1]);
  for (const reference of references) {
    if (/^(#|mailto:|tel:|data:|https?:)/.test(reference)) continue;
    const path = resolve(dirname(page), reference.split(/[?#]/)[0]);
    if (!existsSync(path)) fail(`${page}: "${reference}" does not exist`);
  }
}

for (const dir of [PAGES_DIR, "css", "js", IMAGE_DIR, "fonts"]) {
  for (const name of readdirSync(dir)) {
    if (!NAME_PATTERN.test(name)) fail(`${dir}/${name}: file names must be ASCII, without spaces or accents`);
  }
}

let totalKb = 0;
const images = readdirSync(IMAGE_DIR).sort();
console.log(`Images of ${IMAGE_DIR}/ (budget: ${IMAGE_BUDGET_KB} kB each)`);
for (const image of images) {
  const kb = statSync(join(IMAGE_DIR, image)).size / 1000;
  totalKb += kb;
  console.log(`  ${image.padEnd(28)} ${kb.toFixed(0).padStart(5)} kB`);
  if (kb > IMAGE_BUDGET_KB) fail(`${image} weighs ${kb.toFixed(0)} kB, above the ${IMAGE_BUDGET_KB} kB budget`);
}
console.log(`  ${"total".padEnd(28)} ${totalKb.toFixed(0).padStart(5)} kB (${images.length} images)`);

if (errors > 0) {
  console.error(`${errors} error(s)`);
  process.exit(1);
}
console.log(`Site check passed: ${pages.length} pages, referenced files, file names and image budget.`);
