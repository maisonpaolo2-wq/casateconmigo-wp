import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import ContactForm from '@/components/ContactForm'
import CtaBand from '@/components/CtaBand'
import { coverage, siteConfig } from '@/content/data'

export const metadata: Metadata = {
  title: 'Contacto · Wedding planner en Valencia',
  description:
    'Escribe a Sara, wedding planner en Valencia. Cuéntale vuestra fecha e idea de boda por formulario o WhatsApp y recibe respuesta personal en menos de 48 horas.',
  alternates: { canonical: '/contacto' },
  openGraph: { title: 'Contacto · Cásate conmigo', images: ['/og-image.jpg'] },
}

export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        lines={['Cuéntame', <em key="b">vuestra boda</em>]}
        sub="Fecha, sitio, número de invitados o solo las ganas. Con eso es suficiente para empezar."
        image={{ src: '/photos/novios-coche-clasico.jpg', alt: 'Novios sonrientes de la mano delante de un coche clásico blanco entre olivos', position: 'center 35%' }}
      />

      <section className="section">
        <div className="wrap contact-grid">
          <div className="contact-aside">
            <p className="eyebrow">Escríbeme</p>
            <Reveal><h2 className="h2">Respondo en menos de <em>48 horas</em></h2></Reveal>
            <Reveal delay={0.08}>
              <p className="muted" style={{ marginTop: 24 }}>
                Después de tu mensaje te propongo una primera reunión sin compromiso, en persona en Valencia o por
                videollamada. Si lo prefieres, escríbeme directamente por WhatsApp.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <dl>
                <div>
                  <dt>WhatsApp</dt>
                  <dd><a href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`} target="_blank" rel="noopener noreferrer">+34 617 23 26 36</a></dd>
                </div>
                {siteConfig.email && (
                  <div>
                    <dt>Email</dt>
                    <dd><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></dd>
                  </div>
                )}
                <div>
                  <dt>Instagram</dt>
                  <dd><a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer">{siteConfig.instagram}</a></dd>
                </div>
                <div>
                  <dt>Agenda</dt>
                  <dd>Abierta para 2026 y 2027</dd>
                </div>
              </dl>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="section section--surface">
        <div className="wrap" style={{ maxWidth: 960 }}>
          <p className="eyebrow">Zona de cobertura</p>
          <Reveal><h2 className="h2">Bodas en Valencia <em>y alrededores</em></h2></Reveal>
          <Reveal delay={0.08}>
            <p className="muted" style={{ marginTop: 24, maxWidth: '36em' }}>
              Trabajo principalmente en Valencia y su provincia. Para bodas más lejos, el desplazamiento se incluye en la
              propuesta desde el principio, sin sorpresas.
            </p>
          </Reveal>
          <ul className="coverage-list">
            {coverage.map((c, i) => (
              <Reveal as="li" key={c} variant="fade-in" delay={i * 0.08}>{c}</Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        script="¿Prisa?"
        title="Si tenéis la fecha encima, escribidme por WhatsApp"
        text="Os respondo el mismo día y vemos juntos si llegamos a tiempo."
      />
    </>
  )
}
