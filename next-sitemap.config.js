/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://zaxe-knowledge-base.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: false,
  autoLastmod: false,
  priority: false,
};
