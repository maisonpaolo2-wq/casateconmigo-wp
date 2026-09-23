'use client'

import { useCallback, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import Lightbox from './Lightbox'

interface GalleryProps {
  images: { src: string; alt: string }[]
  variant?: 'home' | 'full'
}

/** Portfolio masonry con lightbox (anterior/siguiente, teclado y swipe). */
export default function Gallery({ images, variant = 'full' }: GalleryProps) {
  const [index, setIndex] = useState<number | null>(null)

  const close = useCallback(() => setIndex(null), [])
  const prev = useCallback(() => setIndex(i => (i === null ? 0 : (i - 1 + images.length) % images.length)), [images.length])
  const next = useCallback(() => setIndex(i => (i === null ? 0 : (i + 1) % images.length)), [images.length])

  return (
    <>
      <div className={`masonry${variant === 'home' ? ' masonry--home' : ''}`}>
        {images.map((img, i) => (
          <motion.button
            key={img.src}
            type="button"
            className="masonry-item"
            onClick={() => setIndex(i)}
            aria-label={`Ampliar: ${img.alt}`}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={900}
              height={1000}
              sizes="(max-width: 599px) 100vw, (max-width: 899px) 50vw, 33vw"
            />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {index !== null && (
          <Lightbox images={images} index={index} onClose={close} onPrev={prev} onNext={next} />
        )}
      </AnimatePresence>
    </>
  )
}
