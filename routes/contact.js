// routes/productRoutes.js
import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();
const router = express.Router();

router.post("/send-mail", async (req, res) => {
  // console.log(req, 'eeeeeee')
  const { firstName, lastName, email, message } = req.body;
  const name = firstName + lastName;
  try {
    const transporter = nodemailer.createTransport({
      // service: "gmail", // Or use 'smtp.mailtrap.io', 'SendGrid', etc.
      host: "smtp.gmail.com",
      secure: true,
      port: 465,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      html: `
        <h3>Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Email failed to send" });
  }
});

export default router;