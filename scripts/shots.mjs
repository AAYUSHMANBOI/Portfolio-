// Scratch e2e/screenshot script — not committed. Usage: node scripts/shots.mjs [label]
import chromium from "@sparticuz/chromium";
import { chromium as pw } from "playwright-core";
import fs from "node:fs";

const label = process.argv[2] || "run";
const BASE = process.env.BASE_URL || "http://localhost:3000";
const OUT = `shots/${label}`;
fs.mkdirSync(OUT, { recursive: true });

const browser = await pw.launch({
  executablePath: await chromium.executablePath(),
  args: chromium.args,
  headless: true,
  env: { ...process.env, LD_LIBRARY_PATH: "/tmp/nssdist/lib" },
});

const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
page.on("console", (m) => {
  if (m.type() === "error") console.log("[console.error]", m.text());
});
page.on("pageerror", (e) => console.log("[pageerror]", e.message));
const failed = [];
page.on("requestfailed", (r) => {
  if (!r.url().includes("unsplash")) failed.push(r.url());
});

// ---- light mode pass ----
await page.goto(BASE, { waitUntil: "networkidle", timeout: 60000 }).catch(() => {});
await page.waitForTimeout(400);
await page.screenshot({ path: `${OUT}/01a-loader-early.png` }); // intro overlay visible
await page.waitForTimeout(900);
await page.screenshot({ path: `${OUT}/01b-loader-mid.png` });
await page.waitForTimeout(3400); // intro fades
await page.screenshot({ path: `${OUT}/02-hero-light.png` });

// open the immersive nav
await page.mouse.move(720, 450); // wake particles first
await page.screenshot({ path: `${OUT}/03-hero-particles.png` });
await page.click('button[aria-label="Toggle menu"]');
await page.waitForTimeout(2600);
await page.screenshot({ path: `${OUT}/04-nav-open.png` });
await page.click('button[aria-label="Toggle menu"]');
await page.waitForTimeout(1600);

// section shots
const sections = ["about", "work", "playground", "contact"];
for (const id of sections) {
  await page.evaluate((sid) => document.getElementById(sid)?.scrollIntoView({ behavior: "instant", block: "start" }), id);
  await page.waitForTimeout(1100);
  if (id === "playground") {
    // drag a trail so the effect is visible in the shot
    for (let x = 300; x <= 1100; x += 100) {
      await page.mouse.move(x, 450 + Math.sin(x / 150) * 120);
      await page.waitForTimeout(60);
    }
  }
  await page.screenshot({ path: `${OUT}/05-${id}-light.png` });
}

// ---- dark mode pass ----
await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
await page.waitForTimeout(600);
await page.click('button[title="Dark mode"], button[title="Light mode"]');
await page.waitForTimeout(900);
await page.screenshot({ path: `${OUT}/06-hero-dark.png` });
await page.evaluate((sid) => document.getElementById(sid)?.scrollIntoView({ behavior: "instant", block: "start" }), "about");
await page.waitForTimeout(900);
await page.screenshot({ path: `${OUT}/07-about-dark.png` });
await page.evaluate((sid) => document.getElementById(sid)?.scrollIntoView({ behavior: "instant", block: "start" }), "work");
await page.waitForTimeout(900);
await page.screenshot({ path: `${OUT}/08-work-dark.png` });

// nav open in dark
await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
await page.waitForTimeout(500);
await page.click('button[aria-label="Toggle menu"]');
await page.waitForTimeout(2200);
await page.screenshot({ path: `${OUT}/09-nav-dark.png` });

// close nav + back to light before mobile pass
await page.click('button[aria-label="Toggle menu"]');
await page.waitForTimeout(1500);
await page.click('button[title="Dark mode"], button[title="Light mode"]');
await page.waitForTimeout(600);

// ---- mobile pass ----
await page.setViewportSize({ width: 390, height: 844 });
await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
await page.waitForTimeout(1200);
await page.screenshot({ path: `${OUT}/10-mobile-hero.png` });
await page.mouse.move(200, 430);
await page.waitForTimeout(600);
await page.screenshot({ path: `${OUT}/11-mobile-particles.png` });
await page.click('button[aria-label="Toggle menu"]');
await page.waitForTimeout(2600);
await page.screenshot({ path: `${OUT}/12-mobile-nav.png` });
await page.click('button[aria-label="Toggle menu"]');
await page.waitForTimeout(1500);
await page.evaluate((sid) => document.getElementById(sid)?.scrollIntoView({ behavior: "instant" }), "about");
await page.waitForTimeout(900);
await page.screenshot({ path: `${OUT}/13-mobile-about.png` });
await page.evaluate((sid) => document.getElementById(sid)?.scrollIntoView({ behavior: "instant" }), "work");
await page.waitForTimeout(900);
await page.screenshot({ path: `${OUT}/14-mobile-work.png` });
await page.evaluate((sid) => document.getElementById(sid)?.scrollIntoView({ behavior: "instant" }), "contact");
await page.waitForTimeout(900);
await page.screenshot({ path: `${OUT}/15-mobile-contact.png` });

if (failed.length) console.log("Failed requests:", failed.join("\n").slice(0, 400));
await browser.close();
console.log("DONE", OUT);
