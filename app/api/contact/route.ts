import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { contactSchema } from '@/lib/validators'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = contactSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 })
    }

    const recipient = process.env.CONTACT_RECIPIENT_EMAIL
    const apiKey = process.env.RESEND_API_KEY
    const fromEmail = process.env.RESEND_FROM_EMAIL ?? 'onboarding@resend.dev'

    if (!recipient || !apiKey) {
      return NextResponse.json({ error: 'Contact configuration missing.' }, { status: 500 })
    }

    const resend = new Resend(apiKey)
    const { name, email, phone, businessType, callVolume, message } = parsed.data

    await resend.emails.send({
      from: `Vercedo Concierge <${fromEmail}>`,
      to: recipient,
      subject: `New VerceBot request from ${name}`,
      reply_to: email,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nBusiness Type: ${businessType}\nCall Volume: ${callVolume}\n\nMessage:\n${message}`
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[CONTACT_ERROR]', error)
    return NextResponse.json({ error: 'Unable to submit message at this time.' }, { status: 500 })
  }
}
