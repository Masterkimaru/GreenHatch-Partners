// app/api/send-email/route.ts
import { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

// Email configuration - use environment variables
const EMAIL_USER = process.env.EMAIL_USER; // Your email address
const EMAIL_PASS = process.env.EMAIL_PASS; // Your email app password
const EMAIL_TO = process.env.EMAIL_TO || EMAIL_USER; // Where to send messages

// Create transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com', // Change if using different email provider
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, message } = await request.json();

    // Basic validation
    if (!firstName || !lastName || !email || !message) {
      return Response.json(
        { error: 'All fields are required' }, 
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: 'Invalid email format' }, 
        { status: 400 }
      );
    }

    // Create email content
    const mailOptions = {
      from: `"${firstName} ${lastName}" <${email}>`,
      to: EMAIL_TO,
      subject: `New Contact Form Message from ${firstName} ${lastName}`,
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h2>New Contact Form Message</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return Response.json(
      { success: true, message: 'Message sent successfully!' }, 
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return Response.json(
      { error: 'Failed to send message. Please try again.' }, 
      { status: 500 }
    );
  }
}