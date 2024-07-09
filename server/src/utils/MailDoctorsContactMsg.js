const nodemailer = require('nodemailer');

const MailDoctorsContactMsg = (formData) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'shaikmahmoodsameer@gmail.com',
            pass: 'wxpzwnsdwarqbilu'
        }
    });

    const emailTemplate = `
RegdId: ${formData.doc_regid},

Topic: ${formData.caseType}
From Email: ${formData.doc_email}
    
Message: ${formData.message}
`;

    const mailOptions = {
        from: 'shaikmahmoodsameer@gmail.com',
        to: formData.doc_email,
        subject: `New Message from Dr.${formData.doc_name}(${formData.doc_regid})`,
        text: emailTemplate
    };

    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error(error);
                reject('Failed!');
            } else {
                console.log(`Doctors Email submitted: ${formData.doc_regid}`);
                resolve('Submitted!');
            }
        });
    });
};

module.exports = {
    MailDoctorsContactMsg
};
