const nodemailer = require('nodemailer');
const { email, password } = require('../../environments/environment.js')

const contact = async (req, res) => {
    const { firstName, lastName, fromEmail, message } = req.body;

    console.log('Recieved form data: ', { firstName, lastName, fromEmail, message });

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: email,
            pass: password,
        },
    });

    const mailOptions = {
        from: fromEmail,
        to: email,
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