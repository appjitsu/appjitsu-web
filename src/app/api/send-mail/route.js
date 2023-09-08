const nodemailer = require("nodemailer");

export async function POST(req) {
  console.log(process.env.EMAIL_ADDRESS, process.env.EMAIL_PASSWORD);
  const transporter = nodemailer.createTransport({
    host: "smtp.forwardemail.net",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const { name, email, message } = await req.json();
  console.log(name, email, message);
  const info = await transporter.sendMail({
    from: "no-reply@appjitsu.net",
    to: '"Jason Cochran - AppJitsu" <jason@appjitsu.net>',
    subject: "Website Feedback",
    text: message,
  });

  await transporter.sendMail({
    from: "no-reply@appjitsu.net",
    to: `"${name}" <${email}>`,
    subject: "Website Feedback",
    text: "Thank you for your reaching out to us! We will get back to you as soon as possible.",
  });

  console.log("Message sent: %s", info.messageId);
}
