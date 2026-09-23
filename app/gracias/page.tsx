import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal, { RevealLine } from '@/components/Reveal'
import { siteConfig } from '@/content/data'

export const metadata: Metadata = {
  title: 'Gracias por escribir',
  description:
    'Hemos recibido vuestra consulta. Sara, wedding planner en Valencia, os responderá en menos de 48 horas para proponeros una primera reunión sin compromiso.',
  robots: { index: false, follow: true },
  alternates: { canonical: '/gracias' },
}

export default function GraciasPage() {
  return (
    <section className="center-page">
      <span className="watermark" aria-hidden>gracias</span>
      <div className="center-page-inner">
        <Reveal variant="fade-in"><span className="script" style={{ fontSize: 'clamp(3.5rem, 12vw, 5.5rem)', color: 'var(--color-accent)', display: 'block' }}>¡Gracias!</span></Reveal>
        <Reveal delay={0.08}><h1 className="h2">Vuestra boda ya está en buenas manos</h1></Reveal>
        <RevealLine width={96} delay={0.16} style={{ margin: '32px auto' }} />
        <Reveal delay={0.24}>
          <p className="muted">
            He recibido vuestro mensaje y os escribo en menos de 48 horas. Mientras tanto, podéis ver más bodas en
            Instagram o escribirme por WhatsApp si os corre prisa.
          </p>
          <div className="cta-actions">
            <Link href="/" className="btn btn--solid">Volver al inicio</Link>
            <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="btn btn--accent">Ver Instagram</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
