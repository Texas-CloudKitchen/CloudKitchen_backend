import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    secure : true,
    port : 465,
    host : "smtp.gmail.com",
    service : "gmail",
    auth : {
        user : process.env.mail_user,
        pass : process.env.mail_pass
    }
})

export {transporter}