"use client";
import React from 'react'
import Heading from './Heading'
import { skillsData } from '@/lib/data'
import { useSectionInVeiw } from '@/lib/hooks'
import { motion } from 'framer-motion';

export default function Skills() {

    const { ref } = useSectionInVeiw("Skills")
    const fadeInAnimation = {
        initial: {
            opacity: 0,
            y: 100,
        },
        animate: (index:number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.05*index,
                duration: 0.25
            }
        })
    }

    return (
        <section ref={ref} className='mb-18 max-w-[53rem] scroll-mt-28 text-center
            sm:mb-[6rem]' id="skills">
            <Heading>My Skills</Heading>
            <ul className='flex flex-wrap justify-center gap-2
                text-lg text-gray-800'>
                {
                    skillsData.map((skill, index) => (
                        <motion.li variants={fadeInAnimation}
                            initial="initial"
                            whileInView="animate"
                            custom={index}
                            className='bg-white border border-black/[0.1] rounded-xl px-5 py-3 
                            dark:bg-white/10 dark:text-white/80'
                            key={index}>{skill}</motion.li>
                    ))
                }
            </ul>
        </section>
    )
}
