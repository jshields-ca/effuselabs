'use client'

import { Button, Text } from '@/components/ui'
import { contact } from '@/content/site'
import React, { useId, useState } from 'react'

/*
 * Not a fake "your message has been sent" form. There is no backend here —
 * real server-side delivery needs a chosen email provider and an API key,
 * which is Jeremy's call to make (adding a paid dependency or service is
 * explicitly not mine to decide silently, per CLAUDE.md), not something to
 * back into for a contact form. So this constructs a proper `mailto:` link
 * from the fields and hands off to the visitor's own mail client — a real
 * upgrade from a bare "email us" link (the fields arrive pre-filled and
 * organised), honest about what actually happens when you press the button.
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

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

  const fieldClasses =
    'w-full rounded-lg border border-surface-border bg-surface-raised px-4 py-3 text-effuse-parchment placeholder:text-effuse-parchment/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-effuse-teal'

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
        <Button type="submit" variant="primary" size="lg" className="w-full">
          Open in your email app
        </Button>
        <Text className="mt-3 text-body-sm text-effuse-parchment/60">
          This opens your email app with your message ready to send — nothing is
          sent until you do.
        </Text>
      </div>
    </form>
  )
}

export default ContactForm
