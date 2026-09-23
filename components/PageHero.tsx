import Image from 'next/image'
import HeroLines, { HeroMedia } from './HeroLines'

interface PageHeroProps {
  eyebrow: string
  lines: React.ReactNode[]
  sub?: string
  image?: { src: string; alt: string; position?: string }
}

export default function PageHero({ eyebrow, lines, sub, image }: PageHeroProps) {
  return (
    <section className={`page-hero${image ? '' : ' page-hero--text'}`}>
      {image && (
        <HeroMedia>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: image.position ?? 'center 40%' }}
          />
        </HeroMedia>
      )}
      <div className="wrap hero-content">
        <p className={`eyebrow${image ? ' eyebrow--light' : ''}`}>{eyebrow}</p>
        <HeroLines
          lines={lines}
          after={sub ? <p className="hero-sub" style={image ? undefined : { color: 'var(--color-muted)' }}>{sub}</p> : undefined}
        />
      </div>
    </section>
  )
}
