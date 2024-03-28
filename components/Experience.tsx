"use client"
import React from 'react'
import { useSectionInVeiw } from '@/lib/hooks'
import Heading from './Heading'
import { expData } from '@/lib/data'
import ExperienceCard from './ExperienceCard'
export default function Experience() {

    const { ref } = useSectionInVeiw("Experience")

    return (
        <section ref={ref} className='scroll-mt-28 mb-16  ' id="experience">
            <Heading>Experience</Heading>
            <div className='flex flex-row gap-8'>
                {expData.map((exp, index) => (
                    <React.Fragment key={index}>
                        <ExperienceCard {...exp} />
                    </React.Fragment>
                ))}
            </div>
        </section>
    )
}
