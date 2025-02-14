import nodemailer from 'nodemailer';

const sendMail = async (to: string, subject: string, html: string)=>{
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for port 465, false for other ports
        auth: {
          user: "mehebul2122@gmail.com",
          pass: "jn7jnAPss4f63QBp6D",
        },
      });
      
      await transporter.sendMail({
        from: 'mehebul2122@gmail.com', // sender address
        to, // list of receivers
        subject:"Reset your password within ten mins!", // Subject line
        text: "Hello world?", // plain text body
        html, // html body
      });
}

export default sendMail;