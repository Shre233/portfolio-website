import React from 'react'
import { expData } from '@/lib/data';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
type ExperienceProps = (typeof expData)[0];

export default function ExperienceCard({ role, club,description }: ExperienceProps) {

    return (
        <div className='mb-3 sm:mb-8 w-[400px] last:mb-0 '>
            <section className='bg-gray-100 max-w-[42rem] border border-black/5
                overflow-hidden rounded-lg sm:pr-8 hover:bg-gray-200 
                relative dark:text-white dark:bg-white/10 dark:hover:bg-white/20'>
                <div className='px-5 pt-4 pb-7  sm:pl-10 
                    sm:pr-2 sm:pt-10 sm:h-[20rem]
                    flex flex-col h-full'>
                    <h3 className='text-2xl  text-center font-semibold'>{role}</h3>
                    <p className='mt-2 text-gray-700  text-center leading-relaxed dark:text-white/70'>{club}</p>
                    <hr className='my-2'/>
                    <ul className='list-disc'>
                        <li>{description.point1}</li>
                        <li>{description.point2}</li>
                    </ul>
                    
                </div>
            </section>
        </div>
    )
}
