'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'

interface LightboxProps {
  images: { src: string; alt: string }[]
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export default function Lightbox({ images, index, onClose, onPrev, onNext }: LightboxProps) {
  const touchX = useRef<number | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrev, onNext])

  const current = images[index]

  return (
    <motion.div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Galería de fotos"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
      onTouchStart={e => { touchX.current = e.touches[0].clientX }}
      onTouchEnd={e => {
        if (touchX.current === null) return
        const dx = e.changedTouches[0].clientX - touchX.current
        if (Math.abs(dx) > 50) (dx > 0 ? onPrev : onNext)()
        touchX.current = null
      }}
    >
      <div className="lightbox-frame" onClick={e => e.stopPropagation()}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current.src}
            style={{ position: 'absolute', inset: 0 }}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <Image src={current.src} alt={current.alt} fill sizes="90vw" />
          </motion.div>
        </AnimatePresence>
      </div>

      <button className="lightbox-btn lightbox-prev" aria-label="Foto anterior" onClick={e => { e.stopPropagation(); onPrev() }}>&#8592;</button>
      <button className="lightbox-btn lightbox-next" aria-label="Foto siguiente" onClick={e => { e.stopPropagation(); onNext() }}>&#8594;</button>
      <button className="lightbox-btn lightbox-close" aria-label="Cerrar galería" onClick={onClose}>&#215;</button>
      <p className="lightbox-count">{index + 1} / {images.length}</p>
    </motion.div>
  )
}
