import { NextResponse } from "next/server"
import sgMail from '@sendgrid/mail';

// import { EmailTemplate } from "@/components/email-template";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(
  req: Request,
) {
  try {
    const body = await req.json()

    const {
      name,
      email,
      message
    } = body

    if (!name || !email || !message) {
      return new NextResponse('Missing fields', { status: 400 })
    }

    const msg = {
      to: process.env.SENDGRID_SENDER!,
      from: process.env.SENDGRID_SENDER!,
      subject: 'New message from your website',
      html: `
        <p>There is a new message from your website:</p><br>
        <p>
          <strong>Nome:</strong> ${name}<br>
          <strong>Email:</strong> ${email}<br>
          <strong>Mensagem:</strong> ${message}<br>
        </p>
      `,
    }

    await sgMail.send(msg)

    return NextResponse.json(msg);
  } catch (error) {
    console.error('[SEND_POST]', error)
    return new NextResponse('Internal Error', { status: 500 })
  }
}