import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  // Check if email service is configured
  const emailService = process.env.EMAIL_SERVICE;
  const emailUser = process.env.EMAIL_USER;
  const emailTo = process.env.EMAIL_TO || "info@globalit.technology";

  if (!emailService || !emailUser) {
    // Honest fallback: email not configured
    return NextResponse.json(
      { message: "Email service not configured" },
      { status: 501 }
    );
  }

  try {
    const body = await req.json();
    const { fullName, email, company, phone, service, message } = body;

    // Basic server-side validation
    if (!fullName || !email || !company || !service || !message) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    // Compose email content
    const emailBody = `
New enquiry from Global IT Technology website:

Name: ${fullName}
Email: ${email}
Company: ${company}
Phone: ${phone || "Not provided"}
Service: ${service}

Message:
${message}

---
Submitted via globalit.technology website
    `.trim();

    // Example integration with Resend (configure EMAIL_SERVICE=resend, EMAIL_API_KEY=your_key)
    if (emailService === "resend") {
      const apiKey = process.env.EMAIL_API_KEY;
      if (!apiKey) {
        return NextResponse.json({ message: "Email API key not configured" }, { status: 501 });
      }

      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: `Website Enquiry <${emailUser}>`,
          to: emailTo,
          reply_to: email,
          subject: `New enquiry from ${fullName} — ${company}`,
          text: emailBody,
        }),
      });

      if (!res.ok) {
        const error = await res.json();
        console.error("Resend error:", error);
        return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
      }

      return NextResponse.json({ message: "Enquiry sent successfully" }, { status: 200 });
    }

    // EMAIL_SERVICE configured but not handled — safe fallback
    return NextResponse.json(
      { message: "Email service not supported" },
      { status: 501 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
