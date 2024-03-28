"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import Link from 'next/link';
import pfp from "@/public/pfp.jpg";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import { FaGithubSquare } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useSectionInVeiw } from '@/lib/hooks';
export default function Intro() {

    const { activeSection, setactiveSection, setLastClick } = useActiveSectionContext()
    const { ref } = useSectionInVeiw("Home")

    return (
        <section ref={ref} id="home" className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-28'>
            <div className="flex items-center justify-center">
                <div className='relative'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "tween", duration: 0.2 }}
                    >
                        <Image src={pfp} alt="pfp" width={192} height={192} quality={95}
                            className='h-30 w-30 rounded-full object-cover
                            shadow-xl border-[0.35rem] border-white'/>
                    </motion.div>

                    <motion.span className=' absolute text-4xl bottom-0 right-0'
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7
                        }}>👋</motion.span>
                </div>
            </div>

            <div>
                <motion.h1
                    className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-2xl"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <span className="font-bold">Hello, I'm Shreyansh Jain,</span> 
                    <span>a proficient </span> {" "}
                    <span className="font-bold">FullStack developer</span> {" "}
                    <span>with a passion for</span>{" "}
                    <span className="font-bold">Data Science and Machine Learning.</span>{" "}
                    <span>From crafting intuitive user interfaces to predicting trends from data and leveraging AI for real-world challenges, my dedication lies in harnessing technology for positive change.</span>
                    
                </motion.h1>
            </div>

            <motion.div className='flex flex-col sm:flex-row 
                items-center justify-center gap-2 px-4 text-lg font-medium'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                }}
            >
                <Link href="#contact" className='group bg-gray-900 text-white
                px-7 py-3 flex items-center gap-2 rounded-full
                outline-none  hover:scale-110 hover:bg-gray-950 cursor-pointer
                transition '
                onClick={()=>{
                    setactiveSection("Contact");
                    setLastClick(Date.now());
                }}
                >
                    Contact me here <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
                </Link>

                <a href="Shreyansh_Jain.pdf" download={true} className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full 
                outline-none  hover:scale-110  cursor-pointer border border-black/10
                transition dark:bg-white/10'>Download CV <HiDownload className='opacity-70 group-hover:translate-y-1 transition' /></a>

                <a href="https://www.linkedin.com/in/shreyansh-jain-5445331b0/" target='_blank'
                    className='bg-white text-gray-700 p-4 flex items-center gap-2 cursor-pointer border border-black/10
                rounded-full outline-none  hover:scale-[1.15] hover:text-gray-950
                transition dark:bg-white/10 dark:text-white/60'><BsLinkedin /></a>

                <a href="https://github.com/Shre233/" target='_blank'
                    className='bg-white text-gray-700 p-4 flex items-center gap-2 cursor-pointer border border-black/10
                rounded-full text-[1.35rem] outline-none  hover:scale-[1.15] hover:text-gray-950
                transition dark:bg-white/10 dark:text-white/60'><FaGithubSquare /></a>
            </motion.div>

        </section>
    )
}
