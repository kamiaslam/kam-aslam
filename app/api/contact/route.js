import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, services, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email content
    const emailContent = `
New Contact Form Submission from Portfolio

Name: ${name}
Email: ${email}
Services: ${services?.length > 0 ? services.join(', ') : 'Not specified'}

Message:
${message}

---
Reply directly to this email to respond to ${name} at ${email}
    `.trim()

    // Use nodemailer as fallback or Web3Forms
    // For now, let's use a simpler approach - Web3Forms (free service)
    const formData = new FormData()
    formData.append('access_key', process.env.WEB3FORMS_ACCESS_KEY || 'YOUR_WEB3FORMS_KEY')
    formData.append('name', name)
    formData.append('email', email)
    formData.append('message', emailContent)
    formData.append('subject', `New Contact Form Submission from ${name}`)
    formData.append('from_name', 'Portfolio Contact Form')
    formData.append('redirect', 'false')

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    })

    const result = await response.json()

    if (result.success) {
      return NextResponse.json({ 
        success: true,
        message: 'Email sent successfully' 
      })
    } else {
      console.error('Web3Forms error:', result)
      throw new Error('Failed to send email')
    }

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}
