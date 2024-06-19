export const dynamic = 'force-dynamic' // defaults to auto
import nodemailer from "nodemailer";

// Replace with your SMTP credentials
const smtpOptions = {
    host: process.env.SMTP_HOST || "smtp.mailtrap.io",
    port: parseInt(process.env.SMTP_PORT || "2525"),
    secure: true,
    auth: {
        user: process.env.SMTP_USER || "user",
        pass: process.env.SMTP_PASSWORD || "",
    },
    tls: {
        rejectUnauthorized: false
    },
}

async function checkRecaptcha(token){
    const tokenCheck = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY}&response=${token}`;

    const approval = fetch(tokenCheck, { method: 'POST' }).then(response => response.json());

    return await approval;
}

export async function POST(request) {
    const res = await request.json(); // res now contains body

    const token = res.token ? res.token : '';
    
    const botCheck = await checkRecaptcha(token);

    if (token != '' && botCheck && typeof botCheck === 'object' && botCheck.success && botCheck.success === true){
        let email = res.name ? `<b>Name:</b><br/> ${res.name}<br/><br/>` : '';
            email += res.email ? `<b>Email:</b><br/> ${res.email}<br/><br/>` : '';
            email += res.message ? `<b>Message:</b><br/> ${res.message}<br/><br/>` : '';
    
        const transporter = nodemailer.createTransport({
            ...smtpOptions,
        });
        
        await transporter.sendMail({
            from: process.env.SMTP_FROM,
            to: process.env.SMTP_TO.split(' '),
            subject: 'Email from ralabbe.com',
            html: email,
        });
        return Response.json({ 'success': true, 'token': botCheck });
    }
    
    return Response.json({ 'success': false, 'token': botCheck });
}