'use client'

import { Button, Text } from '@/components/ui'
import { contact } from '@/content/site'
import React, { useId, useState } from 'react'

/*
 * Sends to `/api/contact` (see app/api/contact/route.ts), which delivers
 * through Resend when `RESEND_API_KEY` is configured. Provisioning that key
 * is Jeremy's call — adding a paid dependency or service isn't mine to
 * decide silently, per CLAUDE.md — so until it exists, or if the request
 * ever fails, this falls back to the same `mailto:` handoff the form used
 * before: never a dead end, just a step less automatic.
 */
const ContactForm: React.FC = () => {
  const nameId = useId()
  const emailId = useId()
  const businessId = useId()
  const messageId = useId()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [business, setBusiness] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  const openMailClient = () => {
    const subject = business
      ? `New enquiry from ${name} (${business})`
      : `New enquiry from ${name}`
    const bodyLines = [
      message,
      '',
      '---',
      `Name: ${name}`,
      `Email: ${email}`,
      business ? `Business: ${business}` : null,
    ].filter((line): line is string => line !== null)

    const mailto = `mailto:${contact.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join('\n'))}`

    window.location.href = mailto
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, business, message }),
      })

      if (response.ok) {
        setStatus('sent')
        return
      }
    } catch {
      // Network failure — fall through to the mail-client handoff below.
    }

    setStatus('idle')
    openMailClient()
  }

  const fieldClasses =
    'w-full rounded-lg border border-surface-border bg-surface-raised px-4 py-3 text-effuse-parchment placeholder:text-effuse-parchment/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-effuse-teal'

  if (status === 'sent') {
    return (
      <div
        role="status"
        className="mx-auto max-w-xl rounded-lg border border-surface-border bg-surface-raised p-8 text-center"
      >
        <Text className="text-effuse-parchment">
          Thanks, {name.split(' ')[0] || 'there'} — your message is on its way.
          We&apos;ll be in touch soon.
        </Text>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-xl space-y-4 text-left"
    >
      <div>
        <label
          htmlFor={nameId}
          className="mb-1.5 block text-body-sm font-medium text-effuse-parchment"
        >
          Your name
        </label>
        <input
          id={nameId}
          type="text"
          required
          value={name}
          onChange={e => setName(e.target.value)}
          className={fieldClasses}
        />
      </div>

      <div>
        <label
          htmlFor={emailId}
          className="mb-1.5 block text-body-sm font-medium text-effuse-parchment"
        >
          Email
        </label>
        <input
          id={emailId}
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          className={fieldClasses}
        />
      </div>

      <div>
        <label
          htmlFor={businessId}
          className="mb-1.5 block text-body-sm font-medium text-effuse-parchment"
        >
          Your business{' '}
          <span className="text-effuse-parchment/50">(optional)</span>
        </label>
        <input
          id={businessId}
          type="text"
          value={business}
          onChange={e => setBusiness(e.target.value)}
          placeholder="e.g. a salon, a barbershop, something else entirely"
          className={fieldClasses}
        />
      </div>

      <div>
        <label
          htmlFor={messageId}
          className="mb-1.5 block text-body-sm font-medium text-effuse-parchment"
        >
          What are you wrestling with?
        </label>
        <textarea
          id={messageId}
          required
          rows={5}
          value={message}
          onChange={e => setMessage(e.target.value)}
          className={fieldClasses}
        />
      </div>

      <div className="pt-2 text-center">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Sending…' : 'Send message'}
        </Button>
      </div>
    </form>
  )
}

export default ContactForm
