/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://learn.zaxe.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: false,
  autoLastmod: false,
  priority: false,
};
