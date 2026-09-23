'use client'

import { motion, type Variants } from 'framer-motion'

const EASE = [0.25, 0.1, 0.25, 1] as const

const variants: Record<string, Variants> = {
  'fade-up': {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0 },
  },
  'fade-in': {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  },
  'scale-in': {
    hidden: { opacity: 0, scale: 1.08 },
    show: { opacity: 1, scale: 1 },
  },
  line: {
    hidden: { scaleX: 0 },
    show: { scaleX: 1 },
  },
}

type Variant = keyof typeof variants

interface RevealProps {
  children?: React.ReactNode
  variant?: Variant
  delay?: number
  duration?: number
  className?: string
  style?: React.CSSProperties
  as?: 'div' | 'li' | 'span' | 'section' | 'figure'
  amount?: number
}

export default function Reveal({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 0.5,
  className,
  style,
  as = 'div',
  amount = 0.2,
}: RevealProps) {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      style={style}
      variants={variants[variant]}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </Tag>
  )
}

/** Línea decorativa 1px que crece de 0 a 100% */
export function RevealLine({ width = 64, delay = 0, style }: { width?: number | string; delay?: number; style?: React.CSSProperties }) {
  return (
    <Reveal variant="line" delay={delay} className="accent-line" style={{ width, ...style }} as="span" />
  )
}
