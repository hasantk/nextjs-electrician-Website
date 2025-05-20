import { NextResponse } from 'next/server';
// import { Resend as _Resend } from 'resend';

// const resend = new _Resend(process.env.RESEND_API_KEY ?? '');

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, message, recaptcha } = body;

    if (!name || !email || !message || !recaptcha) {
      return NextResponse.json({ message: 'Missing required fields.' }, { status: 400 });
    }

    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    if (!recaptchaSecret) {
      return NextResponse.json({ message: 'reCAPTCHA secret key is not set.' }, { status: 500 });
    }

    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${recaptcha}`,
      {
        method: 'POST',
      }
    );

    const recaptchaResult = await recaptchaResponse.json();

    if (!recaptchaResult.success) {
      return NextResponse.json(
        { message: 'reCAPTCHA verification failed.' },
        { status: 400 }
      );
    }

    // E-postayı göndermek isterseniz aşağıdaki kodu yorumdan çıkarın
    // await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: 'iletisim@izniksabitelektrik.com',
    //   subject: 'Mail',
    //   html: `
    //     <h2>Mail</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Message:</strong> ${message}</p>
    //   `,
    // });

    return NextResponse.json({ message: 'Message Success!' }, { status: 200 });
  } catch (error) {
    console.error('POST /api/contact error:', error);
    return NextResponse.json({ message: 'Something went wrong.' }, { status: 500 });
  }
}
