const nodemailer = require('nodemailer');

const SendDocRegSuccessfullMail = (name, email, speciality, regId, mobileNumber) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'shaikmahmoodsameer@gmail.com',
            pass: 'wxpzwnsdwarqbilu'
        }
    });

    const emailTemplate = `
        Dear ${name},

        You have successfully registered at Fearless Against Rabies - Doctors point with following details,
        Mobile number: ${mobileNumber}
        Speciality: ${speciality}
        Registered Id: ${regId}

        Regards
        Fearless Against Rabies
    `;

    const mailOptions = {
        from: 'shaikmahmoodsameer@gmail.com',
        to: email,
        subject: `Registered Successfully - Fearless Against Rabies`,
        text: emailTemplate
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            return ( error );
        }
        console.log("doctor registered email sent!");
    });
};

module.exports = {
  SendDocRegSuccessfullMail
};
