import { contact } from '@/content/site'
import { NextResponse } from 'next/server'

/*
 * Sends the homepage contact form via Resend's HTTP API rather than adding
 * the `resend` npm package — this is one `fetch` call, and avoiding the
 * dependency means this route compiles and type-checks with zero footprint
 * until a real key exists.
 *
 * Per CLAUDE.md non-negotiable #3 ("no secrets at import time"), the API key
 * is read from `process.env` inside the handler, not at module scope, so a
 * build or a request with no key configured never throws — it degrades to a
 * 503, and `ContactForm.tsx` falls back to opening the visitor's own mail
 * client. Adding the actual Resend account and API key is Jeremy's call
 * (CLAUDE.md: adding a paid dependency or service isn't mine to decide
 * silently) — this route is inert until `RESEND_API_KEY` is set in Vercel
 * and `effuse.io` is verified as a sending domain in Resend.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

interface ContactPayload {
  name: string
  email: string
  business?: string
  message: string
}

function isValidPayload(body: unknown): body is ContactPayload {
  if (typeof body !== 'object' || body === null) return false
  const { name, email, business, message } = body as Record<string, unknown>
  return (
    typeof name === 'string' &&
    name.trim().length > 0 &&
    typeof email === 'string' &&
    EMAIL_RE.test(email) &&
    typeof message === 'string' &&
    message.trim().length > 0 &&
    (business === undefined || typeof business === 'string')
  )
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'not_configured' }, { status: 503 })
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'invalid_body' }, { status: 400 })
  }

  if (!isValidPayload(body)) {
    return NextResponse.json({ error: 'invalid_fields' }, { status: 400 })
  }

  const { name, email, business, message } = body
  const businessLine = business?.trim() || null

  const subject = businessLine
    ? `New enquiry from ${name} (${businessLine})`
    : `New enquiry from ${name}`

  const text = [
    message,
    '',
    '---',
    `Name: ${name}`,
    `Email: ${email}`,
    businessLine ? `Business: ${businessLine}` : null,
  ]
    .filter((line): line is string => line !== null)
    .join('\n')

  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Effuse Labs <hello@effuse.io>',
      to: contact.email,
      reply_to: email,
      subject,
      text,
    }),
  })

  if (!resendResponse.ok) {
    return NextResponse.json({ error: 'send_failed' }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
