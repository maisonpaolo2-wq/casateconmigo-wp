'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { navLinks, siteConfig } from '@/content/data'

// Rutas con foto a sangre bajo la nav (nav transparente en top)
const DARK_HERO = ['/', '/servicios', '/sobre-mi', '/portfolio', '/contacto']

export default function Nav() {
  const pathname = usePathname()
  const sentinel = useRef<HTMLDivElement>(null)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const solid = !DARK_HERO.includes(pathname)

  useEffect(() => {
    const el = sentinel.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting))
    io.observe(el)
    return () => io.disconnect()
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  useEffect(() => setOpen(false), [pathname])

  return (
    <>
      <div ref={sentinel} className="nav-sentinel" aria-hidden />
      <header className={`nav${scrolled ? ' scrolled' : ''}${solid ? ' solid' : ''}`}>
        <div className="wrap nav-inner">
          <Link href="/" className="nav-logo" aria-label={`${siteConfig.name}, inicio`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/photos/logo-white.png" alt="" className="logo-white" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/photos/logo-ink.png" alt="" className="logo-ink" />
          </Link>

          <nav aria-label="Principal">
            <ul className="nav-links">
              {navLinks.map(l => (
                <li key={l.href}>
                  <Link href={l.href} aria-current={pathname === l.href ? 'page' : undefined}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-right">
            <span className="nav-lang" title="Próximamente · Coming soon" aria-disabled="true">
              EN
            </span>
            <button className="nav-burger" aria-label="Abrir menú" aria-expanded={open} onClick={() => setOpen(true)}>
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menú"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            onClick={e => { if (e.target === e.currentTarget) setOpen(false) }}
          >
            <div className="menu-head" onClick={() => setOpen(false)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/photos/logo-white.png" alt={siteConfig.name} style={{ width: 150 }} />
              <button className="menu-close" aria-label="Cerrar menú" onClick={() => setOpen(false)}>&#215;</button>
            </div>
            <ul className="menu-links">
              {[{ href: '/', label: 'Inicio' }, ...navLinks].map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08, ease: 'easeOut' }}
                >
                  <Link href={l.href} onClick={() => setOpen(false)}>
                    <span>0{i + 1}</span>{l.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="menu-foot">
              <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">WhatsApp · +34 617 23 26 36</a>
              <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer">{siteConfig.instagram}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
