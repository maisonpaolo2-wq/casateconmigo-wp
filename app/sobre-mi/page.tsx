import type { Metadata } from 'next'
import Image from 'next/image'
import PageHero from '@/components/PageHero'
import Reveal, { RevealLine } from '@/components/Reveal'
import CtaBand from '@/components/CtaBand'
import { values } from '@/content/data'

export const metadata: Metadata = {
  title: 'Sobre mí · Sara, wedding planner en Valencia',
  description:
    'Soy Sara, wedding planner en Valencia. Organizo bodas con la tranquilidad de una amiga y el criterio de una profesional. Conoce mi historia y cómo trabajo.',
  alternates: { canonical: '/sobre-mi' },
  openGraph: { title: 'Sobre mí · Cásate conmigo', images: ['/og-image.jpg'] },
}

export default function SobreMiPage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre mí"
        lines={['Detallista,', 'especialista', <em key="a">y muy alegre</em>]}
        sub="Soy Sara y llevo la organización de bodas en Valencia como una mezcla de lista infinita y fiesta."
        image={{ src: '/photos/novios-cartuja-ara-christi.jpg', alt: 'Novia mirando atrás mientras pasea con el novio por el jardín de La Cartuja de Ara Christi', position: 'center 45%' }}
      />

      <section className="section">
        <div className="wrap about-grid">
          <Reveal variant="fade-in" className="about-photo-wrap">
            <Reveal variant="scale-in" className="about-photo">
              <Image src="/photos/sara-wedding-planner.jpg" alt="Sara, wedding planner de Cásate conmigo, sonriendo con jersey color crema" fill sizes="(max-width: 899px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
            </Reveal>
          </Reveal>
          <div className="about-text">
            <Reveal variant="fade-in"><span className="script">encantada</span></Reveal>
            <Reveal delay={0.08}><h2 className="h2">Organizo bodas reales, no bodas de catálogo</h2></Reveal>
            <Reveal delay={0.16}>
              <p className="lead" style={{ marginTop: 24 }}>
                Cada pareja llega con una idea distinta y con miedos parecidos: el presupuesto, los tiempos, que algo falle.
                Mi trabajo empieza justo ahí.
              </p>
              <p className="muted">
                Me defino como detallista porque llevo en el bolso lo que nadie se acuerda de traer. Especialista porque conozco
                los espacios, los tiempos y a los proveedores de Valencia. Y alegre porque una boda es una fiesta, y
                organizarla también debería serlo.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="story">
          <div className="wrap">
            <p className="eyebrow">Mi historia</p>
            <Reveal>
              <p>
                Empecé en esto casi sin querer, ayudando a amigas con sus bodas. Me pasaba las semanas previas con hojas de
                cálculo, llamadas a floristas y listas de invitados, y el día de la boda acababa colocando velos, repartiendo
                abanicos y buscando al fotógrafo para la foto con los abuelos. Descubrí que eso que para otros era estrés, para mí
                era ilusión.
              </p>
              <p>
                Hoy lo hago de forma profesional desde Valencia. He coordinado ceremonias en iglesias góticas con colas de tres
                metros, bodas con coche clásico y aire de los años cuarenta, y celebraciones entre las ruinas de una cartuja.
                Cada una con su personalidad, ninguna igual a la anterior.
              </p>
            </Reveal>
            <Reveal>
              <blockquote>Mi mejor día de trabajo es aquel en el que los novios ni se enteran de que había un problema.</blockquote>
            </Reveal>
            <Reveal>
              <p>
                Trabajo con pocas bodas al año para poder estar de verdad en cada una. Seré vuestra persona de contacto de
                principio a fin, sin intermediarios. Y el día B estaré ahí desde el montaje, un paso por detrás de vosotros,
                para que vuestra única preocupación sea elegir el ramo.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="eyebrow">Valores</p>
          <Reveal><h2 className="h2">Lo que me define</h2></Reveal>
          <div className="values-grid">
            {values.map((v, i) => (
              <Reveal className="value" key={v.title} delay={i * 0.08}>
                <span className="value-num">0{i + 1}</span>
                <div>
                  <h3 className="h3">{v.title}</h3>
                  <p>{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <RevealLine width="100%" style={{ marginTop: 64 }} />
          <div className="duo" style={{ marginTop: 64 }}>
            <Reveal variant="scale-in" className="duo-item">
              <Image src="/photos/novia-pendiente-perlas.jpg" alt="Detalle de pendiente de perla y gargantilla de la novia bajo el velo" fill sizes="50vw" style={{ objectFit: 'cover' }} />
            </Reveal>
            <Reveal variant="scale-in" delay={0.08} className="duo-item">
              <Image src="/photos/novia-padre-blauverd.jpg" alt="El padre de la novia la ayuda a bajar del coche clásico, fotografía en blanco y negro" fill sizes="50vw" style={{ objectFit: 'cover' }} />
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        surface
        script="un café"
        title="Me encantaría conoceros y escuchar vuestra historia"
        text="La primera reunión es sin compromiso, en Valencia o por videollamada."
      />
    </>
  )
}
