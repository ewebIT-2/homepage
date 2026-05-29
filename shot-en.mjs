import puppeteer from "puppeteer-core";
import fs from "node:fs/promises";
import path from "node:path";
import url from "node:url";

const ROOT = path.dirname(url.fileURLToPath(import.meta.url));
const SHOT_DIR = path.join(ROOT, "temporary screenshots");
await fs.mkdir(SHOT_DIR, { recursive: true });

const [hash = "", label = "en", w = "1440", h = "900"] = process.argv.slice(2);

const files = await fs.readdir(SHOT_DIR).catch(() => []);
const next = files.map(f => /^screenshot-(\d+)/.exec(f)?.[1]).filter(Boolean).map(Number).reduce((m, n) => Math.max(m, n), 0) + 1;
const outPath = path.join(SHOT_DIR, `screenshot-${next}-${label}.png`);

const browser = await puppeteer.launch({
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: "new",
  defaultViewport: { width: Number(w), height: Number(h), deviceScaleFactor: 1 },
});
const page = await browser.newPage();
await page.goto("http://localhost:3000/" + hash, { waitUntil: "networkidle0" });
await page.evaluate(() => {
  const btn = document.querySelector('[data-lang-toggle="en"]');
  if (btn) btn.click();
});
await new Promise(r => setTimeout(r, 1200));
if (hash) {
  await page.evaluate((h) => { const el = document.querySelector(h); if (el) el.scrollIntoView(); }, hash);
  await new Promise(r => setTimeout(r, 400));
}
await page.screenshot({ path: outPath, fullPage: false });
console.log(`Saved ${outPath}`);
await browser.close();
