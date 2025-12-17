const fs = require('fs')
const path = require('path')

const SITE_URL = 'https://etkiliendustriyelservisi.com'

function getServiceSlugs() {
  const servicesPath = path.join(__dirname, 'data', 'services.ts')
  const content = fs.readFileSync(servicesPath, 'utf8')
  const matches = [...content.matchAll(/slug:\s*'([^']+)'/g)]
  return [...new Set(matches.map((m) => m[1]))]
}

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: false,
  sitemapSize: 5000,
  additionalPaths: async (config) => {
    const slugs = getServiceSlugs()
    const paths = slugs.map((slug) => `/hizmetlerimiz/${slug}`)
    const transformed = await Promise.all(paths.map((p) => config.transform(config, p)))
    return transformed
  },
}


