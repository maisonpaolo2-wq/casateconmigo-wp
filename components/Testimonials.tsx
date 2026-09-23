'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { testimonials } from '@/content/data'

/** Cita grande centrada, una a la vez. Avanza sola cada 8s salvo reduced-motion. */
export default function Testimonials() {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const reduce = useReducedMotion()
  const total = testimonials.length

  useEffect(() => {
    if (reduce || paused) return
    const t = setTimeout(() => setI(n => (n + 1) % total), 8000)
    return () => clearTimeout(t)
  }, [i, reduce, paused, total])

  const t = testimonials[i]

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <span className="quote-mark" aria-hidden>&ldquo;</span>
      <div className="quote-stage" aria-live="polite">
        <AnimatePresence mode="wait" initial={false}>
          <motion.figure
            key={t.name}
            style={{ margin: 0 }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <blockquote className="quote-text" style={{ padding: 0 }}>{t.text}</blockquote>
            <figcaption className="quote-meta">
              <strong>{t.name}</strong>
              {t.location} · {t.date}
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>
      <div className="quote-controls">
        <button className="quote-arrow" aria-label="Testimonio anterior" onClick={() => setI(n => (n - 1 + total) % total)}>&#8592;</button>
        {testimonials.map((x, n) => (
          <button key={x.name} className="quote-dot" aria-label={`Testimonio de ${x.name}`} aria-current={n === i} onClick={() => setI(n)}>
            <span />
          </button>
        ))}
        <button className="quote-arrow" aria-label="Testimonio siguiente" onClick={() => setI(n => (n + 1) % total)}>&#8594;</button>
      </div>
    </div>
  )
}
