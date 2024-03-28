"use client";

import React, { useRef } from 'react'
import Heading from './Heading'
import { useSectionInVeiw } from '@/lib/hooks'
import { motion } from 'framer-motion';
import { sendEmail } from '@/actions/serverAction';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';


export default function Contact() {

    const { ref } = useSectionInVeiw("Contact");
    const formRef = useRef<HTMLFormElement>(null);
    return (
        <motion.section ref={ref} id="contact" className='mb-20 scroll-mt-28 sm:mb-28 text-center w-[min(100%,38rem)]'
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                duration: 1
            }}
            viewport={{
                once: true,
            }}
        >
            <Heading>Contact Me</Heading>
            <p className='text-gray-700 -mt-6 dark:text-white/80'>Please contact me at{" "}
                <a className='underline' href="mailto:jainshreyansh233@gmail.com">jainshreyansh233@gmail.com</a>
                {" "}or through this form.
            </p>
            <form 
            ref={formRef}
            className='mt-10 flex flex-col dark:text-black' 
            action={async (formData) => {
                // console.log(formData.get("senderEmail"));
                // console.log(formData.get("message"));
                const { data,error } = await sendEmail(formData);
                if(error){
                    toast.error(error);
                    return;
                }
                toast.success("Email sent successfully");
                if(formRef!=null)
                formRef.current.reset()
            }}>
                <input type="email"
                    placeholder='Your Email'
                    required
                    maxLength={100}
                    name="senderEmail"
                    className='h-14 rounded-lg border border-black/10 p-4 
                    dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none' />

                <textarea
                    placeholder='Your message'
                    required
                    maxLength={1000}
                    name='message'
                    className='h-52 my-3 rounded-lg border border-black/10 p-4
                    dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'>
                </textarea>
                <SubmitBtn/>
                
            </form>

        </motion.section>
    )
}
