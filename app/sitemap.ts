import type { MetadataRoute } from 'next'
import { siteConfig } from '@/content/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${siteConfig.domain}`
  const routes: Array<[string, number, MetadataRoute.Sitemap[number]['changeFrequency']]> = [
    ['', 1, 'monthly'],
    ['/servicios', 0.9, 'monthly'],
    ['/portfolio', 0.8, 'monthly'],
    ['/sobre-mi', 0.7, 'yearly'],
    ['/contacto', 0.9, 'yearly'],
  ]
  return routes.map(([path, priority, changeFrequency]) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))
}
