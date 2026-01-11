// nombre del archivo: route.tsx
import  EmailTemplate  from '@/emails/EmailTemplate';
import { Resend } from 'resend';
import * as React from 'react'; // Agregado por seguridad
import { NextResponse } from 'next/server';

export const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['alanruz245@gmail.com'],
      subject: 'Nuevo Cliente Potencial 📲',
        react: React.createElement(EmailTemplate, {
            firstName: body.name,
            email: body.email,
            message: body.message,
        }),
    });

    if (error) return NextResponse.json({ error }, { status: 500 });

    return NextResponse.json({data}, { status: 200 });
    
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
