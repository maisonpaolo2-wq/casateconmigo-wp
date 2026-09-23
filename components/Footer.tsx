import Link from 'next/link'
import Image from 'next/image'
import { navLinks, siteConfig } from '@/content/data'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer-bg" aria-hidden>
        <Image src="/photos/coche-iglesia-santa-catalina.jpg" alt="" fill sizes="100vw" />
      </div>
      <div className="wrap">
        <p className="footer-phrase">
          Organizo bodas reales con la tranquilidad de una amiga y el criterio de una profesional.
          <small>Sara</small>
        </p>

        <div className="footer-grid">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/photos/logo-white.png" alt={siteConfig.name} className="footer-logo" />
            <p className="footer-text">{siteConfig.bioShort}</p>
          </div>
          <div>
            <p className="footer-label">Navegación</p>
            <ul className="footer-list">
              <li><Link href="/">Inicio</Link></li>
              {navLinks.map(l => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <p className="footer-label">Hablemos</p>
            <ul className="footer-list">
              <li><a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">WhatsApp · +34 617 23 26 36</a></li>
              <li><a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer">Instagram · {siteConfig.instagram}</a></li>
              {siteConfig.email && <li><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li>}
              <li><Link href="/contacto">Formulario de contacto</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} {siteConfig.name} · Wedding planner</span>
          <span>{siteConfig.locations.join(' · ')} · Agenda abierta 2026 y 2027</span>
        </div>
      </div>
    </footer>
  )
}
