export default function handler(req, res) {
  const robots = `User-agent: *
Allow: /
Allow: /owners/tampa-audit
Disallow: /owners/

Sitemap: https://www.betweenstaysco.com/sitemap.xml`;

  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send(robots);
}
