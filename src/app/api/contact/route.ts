import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate } from '@/components/EmailTemplate';

const toEmail = 'jccpyt@gmail.com';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      to: [toEmail],
      subject: `New message from ${name} via Portfolio`,
      replyTo: email,
      react: await EmailTemplate({ name, email, message }),
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}` // Fallback text version
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}