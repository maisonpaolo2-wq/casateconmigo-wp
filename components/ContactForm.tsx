'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { siteConfig } from '@/content/data'

type Status = 'idle' | 'loading' | 'error'
type Fields = 'name' | 'email' | 'phone' | 'date' | 'place' | 'guests' | 'service' | 'message'
type Form = Record<Fields, string>

const EMPTY: Form = { name: '', email: '', phone: '', date: '', place: '', guests: '', service: '', message: '' }
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(f: Form, privacy: boolean) {
  const e: Partial<Record<Fields | 'privacy', string>> = {}
  if (f.name.trim().length < 2) e.name = 'Dinos cómo os llamáis'
  if (!EMAIL_RE.test(f.email.trim())) e.email = 'Revisa el email, parece incompleto'
  if (f.phone && f.phone.replace(/\D/g, '').length < 9) e.phone = 'El teléfono necesita al menos 9 cifras'
  if (f.guests && !/^\d{1,4}$/.test(f.guests.trim())) e.guests = 'Solo el número aproximado'
  if (f.message.trim().length < 10) e.message = 'Cuéntame un poco más de vuestra boda'
  if (!privacy) e.privacy = 'Necesito tu permiso para responderte'
  return e
}

export default function ContactForm({ compact = false }: { compact?: boolean }) {
  const router = useRouter()
  const [form, setForm] = useState<Form>(EMPTY)
  const [privacy, setPrivacy] = useState(false)
  const [touched, setTouched] = useState(false)
  const [status, setStatus] = useState<Status>('idle')

  const errors = validate(form, privacy)
  const show = (k: Fields | 'privacy') => (touched ? errors[k] : undefined)
  const set = (k: Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setTouched(true)
    if (Object.keys(errors).length) return
    setStatus('loading')
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error(String(res.status))
      router.replace('/gracias', { scroll: true })
    } catch {
      setStatus('error')
    }
  }

  const field = (k: Fields, label: string, input: React.ReactNode) => (
    <div className="field" data-invalid={!!show(k)}>
      <label htmlFor={k}>{label}</label>
      {input}
      {show(k) && <span className="field-error" id={`${k}-err`}>{show(k)}</span>}
    </div>
  )

  return (
    <form className="form" onSubmit={submit} noValidate>
      <div className="form-row">
        {field('name', 'Vuestros nombres *', <input id="name" autoComplete="name" value={form.name} onChange={set('name')} placeholder="Lucía y Pablo" aria-describedby="name-err" />)}
        {field('email', 'Email *', <input id="email" type="email" autoComplete="email" inputMode="email" value={form.email} onChange={set('email')} placeholder="hola@email.com" aria-describedby="email-err" />)}
      </div>
      <div className="form-row">
        {field('phone', 'Teléfono', <input id="phone" type="tel" autoComplete="tel" inputMode="tel" value={form.phone} onChange={set('phone')} placeholder="+34 600 000 000" aria-describedby="phone-err" />)}
        {field('date', 'Fecha aproximada', <input id="date" value={form.date} onChange={set('date')} placeholder="Septiembre 2027" />)}
      </div>
      {!compact && (
        <div className="form-row">
          {field('place', 'Lugar o zona', <input id="place" value={form.place} onChange={set('place')} placeholder="Valencia, masía, aún no lo sabemos" />)}
          {field('guests', 'Invitados', <input id="guests" inputMode="numeric" value={form.guests} onChange={set('guests')} placeholder="120" aria-describedby="guests-err" />)}
        </div>
      )}
      {field('service', 'Qué necesitáis', (
        <select id="service" value={form.service} onChange={set('service')}>
          <option value="">Aún no lo tengo claro</option>
          <option>Organización integral</option>
          <option>Coordinación del día B</option>
          <option>Diseño y ambientación</option>
        </select>
      ))}
      {field('message', 'Contadme vuestra boda *', <textarea id="message" rows={compact ? 3 : 5} value={form.message} onChange={set('message')} placeholder="Cómo os la imagináis, qué os preocupa, qué tenéis ya..." aria-describedby="message-err" />)}

      <div>
        <label className="form-check">
          <input type="checkbox" checked={privacy} onChange={e => setPrivacy(e.target.checked)} />
          <span>Acepto que {siteConfig.name} use estos datos solo para responder a mi consulta.</span>
        </label>
        {show('privacy') && <span className="field-error">{show('privacy')}</span>}
      </div>

      {status === 'error' && (
        <p className="form-alert" role="alert">
          No se ha podido enviar. Escríbeme por{' '}
          <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>WhatsApp</a>
          {siteConfig.email && <> o a <a href={`mailto:${siteConfig.email}`} style={{ textDecoration: 'underline' }}>{siteConfig.email}</a></>} y te respondo hoy.
        </p>
      )}

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'center' }}>
        <button type="submit" className="btn btn--solid" disabled={status === 'loading'}>
          {status === 'loading' ? 'Enviando…' : 'Enviar consulta'}
        </button>
        <p className="form-note">Respondo en menos de 48 horas.</p>
      </div>
    </form>
  )
}
