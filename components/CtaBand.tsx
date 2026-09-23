import Link from 'next/link'
import Reveal from './Reveal'
import { siteConfig } from '@/content/data'

export default function CtaBand({
  script = 'Hablemos',
  title,
  text,
  surface = false,
}: {
  script?: string
  title: string
  text?: string
  surface?: boolean
}) {
  return (
    <section className={`section cta-band${surface ? ' section--surface' : ''}`}>
      <div className="wrap">
        <Reveal variant="fade-in"><span className="script">{script}</span></Reveal>
        <Reveal delay={0.08}><h2 className="h2">{title}</h2></Reveal>
        {text && <Reveal delay={0.16}><p className="muted" style={{ maxWidth: '34em', margin: '0 auto' }}>{text}</p></Reveal>}
        <Reveal delay={0.24} className="cta-actions">
          <Link href="/contacto" className="btn btn--solid">Cuéntame vuestra boda</Link>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--accent"
          >
            Escribir por WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  )
}
