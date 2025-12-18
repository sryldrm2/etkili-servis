/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://etkiliendustriyelservisi.com',
  generateRobotsTxt: true, 
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/admin', '/404'], 
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}