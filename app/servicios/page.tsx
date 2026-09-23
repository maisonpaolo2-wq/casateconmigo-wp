import type { Metadata } from 'next'
import Image from 'next/image'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import CtaBand from '@/components/CtaBand'
import { services } from '@/content/data'

export const metadata: Metadata = {
  title: 'Servicios de wedding planner en Valencia',
  description:
    'Organización integral, coordinación del día B y diseño de bodas en Valencia. Descubre qué incluye cada servicio de Cásate conmigo y cómo trabaja Sara contigo.',
  alternates: { canonical: '/servicios' },
  openGraph: { title: 'Servicios · Cásate conmigo', images: ['/og-image.jpg'] },
}

const faqs = [
  {
    q: '¿Con cuánta antelación debemos contactar?',
    a: 'Para organización integral lo ideal son entre 12 y 18 meses. Para coordinación del día B, a partir de tres meses antes. Si vuestra fecha es antes, escribidme igualmente: muchas veces hay hueco.',
  },
  {
    q: '¿Trabajáis fuera de Valencia?',
    a: 'Sí. Me muevo por toda la Comunidad Valenciana y hago bodas en Castellón y Alicante bajo consulta, con el desplazamiento incluido en el presupuesto.',
  },
  {
    q: '¿Tengo que contratar a vuestros proveedores?',
    a: 'No. Os propongo los que mejor encajan con vuestra boda y presupuesto, pero si ya tenéis alguno contratado o de confianza, trabajo con él sin problema.',
  },
  {
    q: '¿Cómo se paga el servicio?',
    a: 'Una reserva para bloquear la fecha y el resto en plazos repartidos hasta la boda. Todo por escrito desde la primera propuesta.',
  },
]

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        lines={['Vosotros decidís,', <em key="e">yo me encargo</em>]}
        sub="Tres maneras de trabajar juntos, pensadas para lo que ya tenéis y lo que os falta."
        image={{ src: '/photos/coche-iglesia-santa-catalina.jpg', alt: 'Coche nupcial clásico esperando a la puerta de una iglesia barroca con flores blancas', position: 'center 55%' }}
      />

      <section className="section">
        <div className="wrap">
          {services.map((s, i) => (
            <article className="detail-service" id={s.slug} key={s.slug} style={{ scrollMarginTop: 100 }}>
              <Reveal variant="scale-in" className="detail-service-media" amount={0.1}>
                <Image src={s.image} alt={s.imageAlt} fill sizes="(max-width: 899px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
              </Reveal>
              <div>
                <Reveal variant="fade-in"><p className="service-num">0{i + 1}</p></Reveal>
                <Reveal delay={0.08}><h2 className="h2">{s.title}</h2></Reveal>
                <Reveal delay={0.16}>
                  <p className="service-kicker">{s.kicker}</p>
                  <p className="muted">{s.longDescription}</p>
                </Reveal>
                <ul className="detail-list">
                  {s.includes.map((item, n) => (
                    <Reveal as="li" key={item} delay={0.2 + n * 0.08}>{item}</Reveal>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--surface">
        <div className="wrap" style={{ maxWidth: 880 }}>
          <p className="eyebrow">Preguntas frecuentes</p>
          <Reveal><h2 className="h2">Lo que siempre me preguntáis</h2></Reveal>
          <div className="faq">
            {faqs.map(f => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        script="¿Empezamos?"
        title="Os preparo una propuesta a medida sin compromiso"
        text="Contadme la fecha y el tipo de boda que imagináis. En la primera reunión os explico qué servicio encaja mejor y cuánto cuesta."
      />
    </>
  )
}
