import { NextRequest, NextResponse } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { fullName, email, phoneNumber, message } = reqBody;
    console.log("body is ", reqBody);
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "u20cs009@coed.svnit.ac.in",
        pass: process.env.EMAIL_PASSWORD ,
      },
    });

    await transporter.sendMail({
      from: email, 
      to: "u20cs009@coed.svnit.ac.in",
      subject: "New contact form submission",
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });
    const response = NextResponse.json({
      message: "successful",
      success: true,
    });
      return response;
  } catch (error: any) {
    return NextResponse.json({ status: 500 });
  }
}
