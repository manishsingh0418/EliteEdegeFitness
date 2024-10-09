import nodeMailer from "nodemailer";
export const sendEmail = async(options)=>{
    const transporter = nodeMailer.nodeTransporter({
      
        host:process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        service:process.env.SMTP_SERVICE,
        auth: {
          user: process.env.SMTP_MAIL,
          pass: process.env.SMTP_PASSWORD,
        },
    });
    const mailOptions ={
        from : nprocess.env.SMTP_MAIL,
        to:options.mail,
        subject:options.subject,
        text:`${options.message} \n\n Email of User Who Sent The Message: ${options.userEmail}`,
        };
        await transporter.sendMail(mailOptions);
};