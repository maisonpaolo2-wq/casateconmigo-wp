import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const FIELDS = ['name', 'email', 'phone', 'date', 'place', 'guests', 'service', 'message'] as const
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const clean = (v: unknown, max = 2000) => (typeof v === 'string' ? v.trim().slice(0, max) : '')

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'JSON inválido' }, { status: 400 })
  }

  const data = Object.fromEntries(FIELDS.map(k => [k, clean(body[k], k === 'message' ? 5000 : 200)])) as Record<(typeof FIELDS)[number], string>

  if (data.name.length < 2 || !EMAIL_RE.test(data.email) || data.message.length < 10) {
    return NextResponse.json({ error: 'Faltan campos obligatorios' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.RESEND_TO
  if (!apiKey || !to) {
    console.error('Lead API: faltan RESEND_API_KEY o RESEND_TO')
    return NextResponse.json({ error: 'Servicio de email no configurado' }, { status: 503 })
  }

  try {
    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM ?? 'Cásate conmigo <onboarding@resend.dev>',
      to,
      replyTo: data.email,
      subject: `Nueva consulta de boda · ${data.name}`,
      text: [
        `Nombres: ${data.name}`,
        `Email: ${data.email}`,
        `Teléfono: ${data.phone || 'No indicado'}`,
        `Fecha: ${data.date || 'No indicada'}`,
        `Lugar: ${data.place || 'No indicado'}`,
        `Invitados: ${data.guests || 'No indicado'}`,
        `Servicio: ${data.service || 'Sin decidir'}`,
        '',
        'Mensaje:',
        data.message,
      ].join('\n'),
    })
    if (error) throw error
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Lead API error:', err)
    return NextResponse.json({ error: 'No se pudo enviar' }, { status: 500 })
  }
}
