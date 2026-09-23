import Image from 'next/image'
import Link from 'next/link'
import Reveal, { RevealLine } from '@/components/Reveal'
import HeroLines, { HeroMedia } from '@/components/HeroLines'
import Gallery from '@/components/Gallery'
import Testimonials from '@/components/Testimonials'
import ContactForm from '@/components/ContactForm'
import { portfolioPhotos, processSteps, services, siteConfig } from '@/content/data'

export default function Home() {
  return (
    <>
      {/* ── Hero fullbleed ── */}
      <section className="hero" id="inicio">
        <HeroMedia>
          <Image
            src="/photos/novia-catedral-valencia.jpg"
            alt="Novia con cola de tres metros entrando del brazo de su padre en una iglesia gótica de Valencia"
            fill
            priority
            sizes="100vw"
          />
        </HeroMedia>
        <div className="wrap hero-content">
          <p className="hero-kicker">Wedding planner · Valencia</p>
          <HeroLines
            lines={['Que tu única', 'preocupación sea', <em key="r">elegir el ramo</em>]}
            after={
              <>
                <p className="hero-sub">{siteConfig.bioShort}</p>
                <div className="hero-actions">
                  <Link href="#contacto" className="btn btn--light">Contadme vuestra boda</Link>
                </div>
              </>
            }
          />
        </div>
        <span className="hero-scroll" aria-hidden>Descubre</span>
      </section>

      {/* ── Intro · asimétrica 40/60, empieza con script ── */}
      <section className="section" id="intro">
        <div className="wrap intro-grid">
          <div className="intro-text">
            <Reveal variant="fade-in"><span className="script">Hola, soy Sara</span></Reveal>
            <Reveal delay={0.08}>
              <h2 className="h2">Transformo el estrés de tu boda en <em>ilusión</em></h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="lead" style={{ marginTop: 28 }}>
                Organizar una boda son cientos de decisiones, llamadas y presupuestos. Yo los convierto en un plan claro
                y en un día que fluye sin que tengáis que mirar el reloj.
              </p>
              <p className="muted">
                Trabajo en Valencia y alrededores con proveedores que conozco de primera mano. Me fijo en lo que nadie ve:
                el velo bien colocado, el coche a su hora, la silla del abuelo a la sombra.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="intro-stats">
                <div><strong>100%</strong><span>Bodas a medida</span></div>
                <div><strong>1</strong><span>Planner, trato directo</span></div>
                <div><strong>26·27</strong><span>Agenda abierta</span></div>
              </div>
            </Reveal>
          </div>
          <div className="intro-photos">
            <Reveal variant="scale-in" className="intro-photo-main">
              <Image src="/photos/novios-coche-clasico.jpg" alt="Novios sonrientes de la mano delante de un coche clásico blanco entre olivos" fill sizes="(max-width: 899px) 100vw, 60vw" style={{ objectFit: 'cover' }} />
            </Reveal>
            <Reveal variant="scale-in" delay={0.16} className="intro-photo-detail">
              <Image src="/photos/novia-pendiente-perlas.jpg" alt="Detalle de pendiente de perla y gargantilla de la novia bajo el velo" fill sizes="(max-width: 899px) 52vw, 24vw" style={{ objectFit: 'cover' }} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Servicios · cards con foto, empieza con línea + título ── */}
      <section className="section section--surface" id="servicios">
        <div className="wrap">
          <div className="services-head">
            <div>
              <p className="eyebrow">Servicios</p>
              <Reveal><h2 className="h2">Tres formas de acompañaros</h2></Reveal>
            </div>
            <Reveal delay={0.08}>
              <p className="muted" style={{ margin: 0 }}>
                Desde la primera visita a la finca hasta el último baile, o solo el día que más importa.
                Elegís cuánto delegar, yo me adapto.
              </p>
            </Reveal>
          </div>

          {services.map((s, i) => (
            <article className="service-card" key={s.slug}>
              <Reveal variant="scale-in" className="service-card-media" amount={0.1}>
                <Image src={s.image} alt={s.imageAlt} fill sizes="(max-width: 767px) 100vw, 55vw" />
              </Reveal>
              <div className="service-card-body">
                <Reveal variant="fade-in"><p className="service-num">0{i + 1}</p></Reveal>
                <Reveal delay={0.08}><h3 className="h3">{s.title}</h3></Reveal>
                <Reveal delay={0.16}>
                  <p className="service-kicker">{s.kicker}</p>
                  <p className="muted">{s.description}</p>
                  <Link href={`/servicios#${s.slug}`} className="link-arrow">Ver qué incluye <span aria-hidden>→</span></Link>
                </Reveal>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Separador a sangre ── */}
      <section className="separator" aria-label="Frase de Sara">
        <Image src="/photos/novios-ruinas-cartuja.jpg" alt="Novios en blanco y negro entre las ruinas de piedra de una cartuja" fill sizes="100vw" />
        <div className="separator-text">
          <Reveal variant="fade-in"><p className="eyebrow eyebrow--light" style={{ justifyContent: 'center' }}>La Cartuja de Ara Christi</p></Reveal>
          <Reveal delay={0.1}>
            <p className="h2">Esa entrada impecable no ocurre por arte de magia.</p>
          </Reveal>
          <RevealLine width={96} delay={0.3} style={{ margin: '32px auto 0', background: '#e9b8b3' }} />
        </div>
      </section>

      {/* ── Proceso · números grandes, empieza con watermark ── */}
      <section className="section process" id="proceso">
        <span className="watermark" aria-hidden>proceso</span>
        <div className="wrap">
          <p className="eyebrow">Cómo trabajamos</p>
          <Reveal><h2 className="h2" style={{ maxWidth: '12em' }}>Cuatro pasos, cero sobresaltos</h2></Reveal>
          <ol className="process-list">
            {processSteps.map((step, i) => (
              <Reveal as="li" className="process-step" key={step.number} delay={i * 0.08}>
                <span className="process-number" aria-hidden>{step.number}</span>
                <div>
                  <h3 className="h3">{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Portfolio · masonry ── */}
      <section className="section section--surface" id="portfolio">
        <div className="wrap">
          <div className="portfolio-head">
            <div>
              <p className="eyebrow">Portfolio</p>
              <Reveal><h2 className="h2">Bodas que hemos <em>vivido</em></h2></Reveal>
            </div>
            <Link href="/portfolio" className="link-arrow">Ver portfolio completo <span aria-hidden>→</span></Link>
          </div>
          <Gallery images={portfolioPhotos} variant="home" />
        </div>
      </section>

      {/* ── Sobre mí · empieza con foto ── */}
      <section className="section" id="sobre-mi">
        <div className="wrap about-grid">
          <Reveal variant="fade-in" className="about-photo-wrap">
            <Reveal variant="scale-in" className="about-photo">
              <Image src="/photos/sara-wedding-planner.jpg" alt="Sara, wedding planner de Cásate conmigo, sonriendo con jersey color crema" fill sizes="(max-width: 899px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
            </Reveal>
          </Reveal>
          <div className="about-text">
            <Reveal variant="fade-in"><span className="script">sobre mí</span></Reveal>
            <Reveal delay={0.08}>
              <h2 className="h2">Una amiga con agenda, lista y plan B</h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="lead" style={{ marginTop: 24 }}>
                Soy Sara y organizo bodas en Valencia. Me encanta que todo encaje, pero me encanta más ver a una pareja
                disfrutar sin pensar en nada.
              </p>
              <p className="muted">
                Detallista hasta el último imperdible y alegre hasta el último baile. Mi forma de trabajar es sencilla:
                escucharos mucho, deciros la verdad y estar siempre un paso por delante.
              </p>
              <p className="about-signature" aria-hidden>Sara</p>
              <Link href="/sobre-mi" className="link-arrow">Conóceme <span aria-hidden>→</span></Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Testimonios · quote grande ── */}
      <section className="section section--surface quote-section" id="testimonios">
        <div className="wrap">
          <p className="eyebrow" style={{ justifyContent: 'center' }}>Lo que dicen</p>
          <Testimonials />
          <RevealLine width={120} delay={0.2} style={{ margin: '56px auto 0' }} />
        </div>
      </section>

      {/* ── Contacto ── */}
      <section className="section" id="contacto">
        <div className="wrap contact-grid">
          <div className="contact-aside">
            <p className="eyebrow">Contacto</p>
            <Reveal><h2 className="h2">¿Os casáis? <em>Hablemos</em></h2></Reveal>
            <Reveal delay={0.08}>
              <p className="muted" style={{ marginTop: 24 }}>
                Contadme la fecha, el sitio que tenéis en mente o solo las ganas. Os respondo en menos de 48 horas con
                una propuesta de primera reunión.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <dl>
                <div>
                  <dt>WhatsApp</dt>
                  <dd><a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">+34 617 23 26 36</a></dd>
                </div>
                <div>
                  <dt>Instagram</dt>
                  <dd><a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer">{siteConfig.instagram}</a></dd>
                </div>
                <div>
                  <dt>Zona</dt>
                  <dd>Valencia y Comunidad Valenciana</dd>
                </div>
              </dl>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <ContactForm compact />
          </Reveal>
        </div>
      </section>
    </>
  )
}
