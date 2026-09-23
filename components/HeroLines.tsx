'use client'

import { motion } from 'framer-motion'

const EASE = [0.25, 0.1, 0.25, 1] as const

/** Titular con entrada línea a línea (0.15s entre líneas). */
export default function HeroLines({
  lines,
  className = 'display',
  as = 'h1',
  after,
}: {
  lines: React.ReactNode[]
  className?: string
  as?: 'h1' | 'h2'
  after?: React.ReactNode
}) {
  const Tag = as
  return (
    <>
      <Tag className={className}>
        {lines.map((l, i) => (
          <span className="line" key={i}>
            <motion.span
              initial={{ y: '105%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15, ease: EASE }}
            >
              {l}
            </motion.span>
          </span>
        ))}
      </Tag>
      {after && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 + lines.length * 0.15, ease: EASE }}
        >
          {after}
        </motion.div>
      )}
    </>
  )
}

/** Foto de cabecera con leve zoom de entrada */
export function HeroMedia({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="hero-media"
      initial={{ scale: 1.08 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
