const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_PORT == 465, // Use true for port 465
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

// HTML email template
const getEmailTemplate = (from_name, to_name, subject, message) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${subject}</title>
    <style>
        body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }
        .container { width: 100%; max-width: 600px; margin: auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); }
        .header { background-color: #007BFF; color: white; padding: 20px; text-align: center; }
        .header h1 { margin: 0; }
        .content { padding: 20px; }
        .content p { line-height: 1.5; color: #333; }
        .footer { background-color: #f1f1f1; text-align: center; padding: 10px; font-size: 12px; color: #777; }
    </style>
</head>
<body>
<div class="container">
    <div class="header">
        <h1>${subject}</h1>
    </div>
    <div class="content">
        <p>Dear ${to_name},</p>
        <p>You have received a new message from ${from_name}.</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <p>Best Regards,<br>${from_name}</p>
    </div>
    <div class="footer">
        <p>&copy; 2024 AP Portfolio. All rights reserved.</p>
    </div>
</div>
</body>
</html>
`;

const sendEmail = async (req, res) => {
  try {
    const { from_name, from_email, to_name, subject, message } = req.body;
    const mailOptions = {
      from: process.env.SMTP_MAIL,
      to: from_email,
      subject: subject,
      html: getEmailTemplate(from_name, to_name, subject, message), // Use HTML template
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error sending email", error: error.message });
  }
};

module.exports = { sendEmail };
