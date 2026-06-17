/**
 * Vercel serverless function to serve sitemap.xml.
 * Rewrite /sitemap.xml -> /api/sitemap ensures this returns XML
 * instead of being caught by the SPA's index.html fallback.
 * Keep in sync with public/sitemap.xml when adding routes.
 */

const SITEMAP = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.betweenstaysco.com/</loc>
    <lastmod>2026-06-16</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.betweenstaysco.com/services</loc>
    <lastmod>2026-06-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.betweenstaysco.com/about</loc>
    <lastmod>2026-06-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://www.betweenstaysco.com/faqs</loc>
    <lastmod>2026-06-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://www.betweenstaysco.com/contact</loc>
    <lastmod>2026-06-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://www.betweenstaysco.com/audit</loc>
    <lastmod>2026-06-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.betweenstaysco.com/blog/vacasa-alternative-in-tampa-bay</loc>
    <lastmod>2026-06-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.betweenstaysco.com/blog/evolve-alternative-in-tampa-bay</loc>
    <lastmod>2026-06-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.betweenstaysco.com/blog/casago-alternative-in-tampa-bay</loc>
    <lastmod>2026-06-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url><loc>https://www.betweenstaysco.com/locations/seminole-airbnb-cohost</loc><lastmod>2026-06-16</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.betweenstaysco.com/locations/largo-airbnb-cohost</loc><lastmod>2026-06-16</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.betweenstaysco.com/locations/dunedin-airbnb-cohost</loc><lastmod>2026-06-16</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.betweenstaysco.com/locations/pinellas-park-airbnb-cohost</loc><lastmod>2026-06-16</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.betweenstaysco.com/locations/clearwater-airbnb-cohost</loc><lastmod>2026-06-16</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.betweenstaysco.com/locations/st-petersburg-airbnb-cohost</loc><lastmod>2026-06-16</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.betweenstaysco.com/locations/palm-harbor-airbnb-cohost</loc><lastmod>2026-06-16</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.betweenstaysco.com/compare/vacasa-vs-between-stays</loc><lastmod>2026-06-16</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.betweenstaysco.com/compare/evolve-vs-between-stays</loc><lastmod>2026-06-16</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.betweenstaysco.com/compare/casago-vs-between-stays</loc><lastmod>2026-06-16</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.betweenstaysco.com/compare/vacasa-vs-evolve-tampa</loc><lastmod>2026-06-16</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.betweenstaysco.com/compare/national-manager-vs-local-cohost</loc><lastmod>2026-06-16</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.betweenstaysco.com/compare/self-managing-vs-cohost</loc><lastmod>2026-06-16</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.betweenstaysco.com/compare/property-manager-vs-airbnb-cohost</loc><lastmod>2026-06-16</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.betweenstaysco.com/compare/full-service-vs-cohost-model</loc><lastmod>2026-06-16</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.betweenstaysco.com/reviews/vacasa-tampa-bay-honest-review</loc><lastmod>2026-06-16</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.betweenstaysco.com/reviews/evolve-tampa-bay-honest-review</loc><lastmod>2026-06-16</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.betweenstaysco.com/reviews/casago-tampa-bay-honest-review</loc><lastmod>2026-06-16</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.betweenstaysco.com/reviews/airbnb-property-manager-tampa-roundup</loc><lastmod>2026-06-16</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.betweenstaysco.com/reviews/what-to-know-before-leaving-vacasa</loc><lastmod>2026-06-16</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>
</urlset>`;

export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=3600');
  res.status(200).send(SITEMAP);
}
