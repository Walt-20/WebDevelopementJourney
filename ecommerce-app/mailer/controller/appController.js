const nodemailer = require('nodemailer');
require('dotenv').config();

const contact = async (req, res) => {
    const { firstName, lastName, fromEmail, message } = req.body;

    console.log('Recieved form data: ', { firstName, lastName, fromEmail, message });

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
    });

    const mailOptions = {
        from: fromEmail,
        to: process.env.EMAIL,
        subject: "TEST",
        text: `
            Name: ${firstName} ${lastName}
            Message: ${message}
        `
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ', info.messageId);

        res.status(201).json("Email Sent!");
    } catch (error) {
        console.error('Error sending email: ', error);
        res.status(500).json("Error sending email");
    }
};

module.exports = {
    contact
};