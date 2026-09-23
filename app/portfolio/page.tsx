import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import Gallery from '@/components/Gallery'
import CtaBand from '@/components/CtaBand'
import { photos } from '@/content/data'

export const metadata: Metadata = {
  title: 'Portfolio de bodas en Valencia',
  description:
    'Bodas organizadas y coordinadas por Cásate conmigo en Valencia: ceremonias en iglesia, coches clásicos, La Cartuja de Ara Christi y pasillos de luz y flores.',
  alternates: { canonical: '/portfolio' },
  openGraph: { title: 'Portfolio · Cásate conmigo', images: ['/og-image.jpg'] },
}

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        lines={['Momentos que', <em key="v">solo ocurren una vez</em>]}
        sub="Una selección de bodas que he organizado y coordinado en Valencia y alrededores."
        image={{ src: '/photos/pasillo-arcos-luz.jpg', alt: 'Pasillo de ceremonia con arcos de luz, tul y flores blancas', position: 'center 50%' }}
      />

      <section className="section">
        <div className="wrap">
          <div className="portfolio-head">
            <Reveal>
              <p className="lead" style={{ margin: 0 }}>
                Iglesias góticas, masías, cartujas y coches de época. Toca cualquier foto para verla en grande.
              </p>
            </Reveal>
            <p className="muted" style={{ margin: 0, fontSize: 'var(--text-xs)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              {photos.length} fotografías
            </p>
          </div>
          <Gallery images={photos} />
        </div>
      </section>

      <CtaBand
        surface
        script="la vuestra"
        title="¿Os imagináis aquí la próxima?"
        text="Cuéntame cómo sería vuestra boda y te digo cómo la haríamos realidad."
      />
    </>
  )
}
