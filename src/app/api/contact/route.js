// src/app/api/contact/route.js

import nodemailer from 'nodemailer';

export async function POST(req) {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
        return new Response(JSON.stringify({ error: 'Missing fields' }), { status: 400 });
    }

    const transporter = nodemailer.createTransport({
        host: process.env.NEXT_PUBLIC_SMTP_HOST,
        port: +process.env.NEXT_PUBLIC_SMTP_PORT,
        secure: false,
        auth: {
            user: process.env.NEXT_PUBLIC_SMTP_USER,
            pass: process.env.NEXT_PUBLIC_SMTP_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: email,
            to: process.env.NEXT_PUBLIC_SMTP_USER,
            subject: `New message from ${name}`,
            text: message,
        });

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (err) {
        console.log("err", err);

        return new Response(JSON.stringify({ error: 'Email failed to send' }), { status: 500 });
    }
}
