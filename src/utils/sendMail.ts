import nodemailer from "nodemailer";
function createHtmlContent(data: any) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Information</title>
  <style>
    body {
      font-family: sans-serif;
      margin: 0;
      padding: 20px;
    }
    .info-label {
      font-weight: bold;
      margin-bottom: 5px;
      display: inline-block;
      width: 120px;
    }
  </style>
</head>
<body>
  <h2>Contact Information</h2>
  <p>
    <span class="info-label">Name:</span> ${data.name}
  </p>
  <p>
    <span class="info-label">Email:</span> ${data.email}
  </p>
  <p>
    <span class="info-label">Phone:</span> ${data.number}
  </p>
  <p>
    <span class="info-label">Message:</span> ${data.message}
  </p>
</body>
</html>
`;
}
export const sendMail = ({
  name = "",
  email = "",
  number = "",
  message = "",
}) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });
  const htmlContent = createHtmlContent({ name, email, number, message });

  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: "Senev Sister's English School <officialhemantpaswan1@gmail.com>",
      to: "hemantakumarpaswan@gmail.com",
      subject: "Contact Information",
      html: htmlContent,
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  }

  main().catch(console.error);
};
