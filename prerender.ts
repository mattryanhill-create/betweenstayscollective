import puppeteer from 'puppeteer';
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { resolve } from 'path';
import { execSync } from 'child_process';

const routes = [
  '/',
  '/services',
  '/audit',
  '/about',
  '/faqs',
  '/contact',
  '/blog/vacasa-alternative-in-tampa-bay',
  '/blog/evolve-alternative-in-tampa-bay',
  '/blog/casago-alternative-in-tampa-bay',
];

// Do NOT prerender /owners/tampa-audit or /owners/tampa-audit/thanks (noindex pages)

async function prerender() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  for (const route of routes) {
    const page = await browser.newPage();
    await page.goto(`http://localhost:4173${route}`, {
      waitUntil: 'networkidle0',
      timeout: 30000,
    });

    // Wait for React to finish rendering (title should change from default)
    await page
      .waitForFunction(
        () =>
          document.title !==
            'Tampa Bay Airbnb Co-Hosting | Between Stays Collective' ||
          window.location.pathname === '/',
        { timeout: 10000 }
      )
      .catch(() => {});
    await new Promise((r) => setTimeout(r, 1000));

    const html = await page.content();

    // Determine output path
    const outDir = resolve('dist', route === '/' ? '' : route.slice(1));
    if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

    const filePath =
      route === '/'
        ? resolve('dist', 'index.html')
        : resolve(outDir, 'index.html');
    writeFileSync(filePath, html);
    console.log(`Prerendered: ${route} → ${filePath}`);

    await page.close();
  }

  await browser.close();
  console.log('Prerendering complete!');
}

prerender().catch(console.error);
