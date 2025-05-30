import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, topic, message } = body

    // Validate required fields
    if (!name || !email || !topic || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Check environment variables
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('Missing SMTP environment variables:', {
        SMTP_HOST: !!process.env.SMTP_HOST,
        SMTP_USER: !!process.env.SMTP_USER,
        SMTP_PASS: !!process.env.SMTP_PASS
      })
      return NextResponse.json(
        { error: 'SMTP configuration missing' },
        { status: 500 }
      )
    }

    // Email content
    const emailContent = `
New contact form submission from ${name}

Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}
Topic: ${topic}

Message:
${message}
    `.trim()

    // Create SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      // Add debug logging
      debug: true,
      logger: true
    })

    console.log('SMTP Config:', {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER,
      secure: process.env.SMTP_PORT === '465'
    })

    // Test connection first
    await transporter.verify()
    console.log('✅ SMTP connection verified')

    // Send email
    const result = await transporter.sendMail({
      from: `"TD Consult Contact Form" <info@td-consult.info>`,
      to: process.env.CONTACT_EMAIL || 'info@td-consult.info',
      replyTo: email, // This allows you to reply directly to the person who contacted you
      subject: `New Contact Form: ${topic} - ${name}`,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #b48a98;">New Contact Form Submission</h2>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #b48a98;">${email}</a></p>
            <p><strong>Company:</strong> ${company || 'Not provided'}</p>
            <p><strong>Topic:</strong> ${topic}</p>
          </div>
          <div style="margin: 20px 0;">
            <h3 style="color: #333;">Message:</h3>
            <div style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 8px; border-left: 4px solid #b48a98;">${message}</div>
          </div>
          <div style="margin: 30px 0; padding: 15px; background: #f0f8ff; border-radius: 8px; border: 1px solid #b48a98;">
            <p style="margin: 0; color: #333; font-size: 14px;">
              💡 <strong>Tip:</strong> You can reply directly to this email to respond to ${name}.
            </p>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            This email was sent from the contact form on td-consult.info
          </p>
        </div>
      `
    })

    console.log('✅ Email sent successfully:', result.messageId)
    return NextResponse.json({ success: true, messageId: result.messageId })

  } catch (error) {
    console.error('❌ Contact form error:', error)
    
    // Provide more specific error messages
    let errorMessage = 'Failed to send email. Please try again later.'
    
    if (error instanceof Error) {
      if (error.message.includes('Invalid login')) {
        errorMessage = 'Email authentication failed. Please check your credentials.'
      } else if (error.message.includes('ECONNREFUSED')) {
        errorMessage = 'Cannot connect to email server. Please check your settings.'
      } else if (error.message.includes('ENOTFOUND')) {
        errorMessage = 'Email server not found. Please check the SMTP host.'
      }
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
} 