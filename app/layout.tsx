import type { Metadata, Viewport } from 'next'
import { Bodoni_Moda, Jost, Mrs_Saint_Delafield } from 'next/font/google'
import './globals.css'
import Providers from '@/components/Providers'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { siteConfig, testimonials, services } from '@/content/data'

const serif = Bodoni_Moda({ subsets: ['latin'], style: ['normal', 'italic'], weight: ['400', '500'], variable: '--serif', display: 'swap' })
const sans = Jost({ subsets: ['latin'], weight: ['300', '400', '500'], variable: '--sans', display: 'swap' })
const script = Mrs_Saint_Delafield({ subsets: ['latin'], weight: '400', variable: '--script', display: 'swap' })

const url = `https://${siteConfig.domain}`

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: {
    default: `${siteConfig.name} · Wedding planner en Valencia`,
    template: `%s · ${siteConfig.name}`,
  },
  description:
    'Wedding planner en Valencia. Sara organiza y coordina bodas con cercanía y detalle: presupuesto, proveedores y día B para que vosotros solo elijáis el ramo.',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url,
    siteName: siteConfig.name,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: `${siteConfig.name} · Wedding planner en Valencia` }],
  },
  twitter: { card: 'summary_large_image', images: ['/og-image.jpg'] },
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
}

export const viewport: Viewport = {
  themeColor: '#faf7f4',
  viewportFit: 'cover',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService'],
  additionalType: 'https://schema.org/WeddingPlanner',
  '@id': `${url}/#business`,
  name: siteConfig.name,
  alternateName: 'Cásate conmigo Wedding Planner',
  description: siteConfig.bio,
  url,
  image: `${url}/og-image.jpg`,
  logo: `${url}/icon.png`,
  telephone: '+34617232636',
  ...(siteConfig.email ? { email: siteConfig.email } : {}),
  priceRange: '€€',
  founder: { '@type': 'Person', name: siteConfig.planner, jobTitle: 'Wedding planner' },
  address: { '@type': 'PostalAddress', addressLocality: 'Valencia', addressRegion: 'Comunidad Valenciana', addressCountry: 'ES' },
  areaServed: siteConfig.locations.map(name => ({ '@type': 'AdministrativeArea', name })),
  sameAs: [siteConfig.instagramUrl],
  makesOffer: services.map(s => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.title, description: s.description } })),
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5', bestRating: '5', reviewCount: String(testimonials.length) },
  review: testimonials.map(t => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: t.name },
    reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
    reviewBody: t.text,
  })),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${serif.variable} ${sans.variable} ${script.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Providers>
          <Nav />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  )
}
