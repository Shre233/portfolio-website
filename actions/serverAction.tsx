"use server";

import React from "react";
import { Resend } from 'resend';
import { validiateString, getErrorMessage } from '@/lib/utils';
import ContactFormEmail from '@/email/ContactForm';

export const sendEmail = async (formData: FormData) => {
    
    console.log("Running on server");

    const resend = new Resend(process.env.RESEND_API_KEY);
    const senderEmail = formData.get("senderEmail");
    const msg = formData.get("message");



    if (!validiateString(senderEmail, 100)) {
        return {
            error: "Invalid Email",
        };
    }

    if (!validiateString(msg, 1000)) {
        return {
            error: "Invalid Message",
        };
    }

    let data;
    try {
        data=await resend.emails.send({
            from: 'Contact From <onboarding@resend.dev>',
            to: 'jainshreyansh233@gmail.com',
            subject: 'Message from Contact Form',
            reply_to: senderEmail as string,
            // text: msg as string,
            react: React.createElement(ContactFormEmail,{
                message:msg as string,
                senderEmail:senderEmail as string,
            }),
            // react: <ContactFormEmail message={msg} senderEmail={senderEmail}/>
        });
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error),
        }
        
    }
    return {
        data,
    };
};
