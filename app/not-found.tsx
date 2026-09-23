import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="center-page">
      <span className="watermark" aria-hidden>404</span>
      <div className="center-page-inner">
        <p className="eyebrow" style={{ justifyContent: 'center' }}>Página no encontrada</p>
        <h1 className="h2">Esta página se ha ido <em>antes del baile</em></h1>
        <p className="muted" style={{ marginTop: 24 }}>
          No encontramos lo que buscabas. Vuelve al inicio y seguimos con la boda.
        </p>
        <div className="cta-actions">
          <Link href="/" className="btn btn--solid">Volver al inicio</Link>
          <Link href="/contacto" className="btn btn--accent">Contacto</Link>
        </div>
      </div>
    </section>
  )
}
