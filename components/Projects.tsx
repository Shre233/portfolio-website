"use client"
import React, { useRef, useEffect } from 'react'
import Heading from './Heading'
import { projectval } from '@/lib/data'
import Project from './Project'
import { useSectionInVeiw } from '@/lib/hooks'
export default function Projects() {

    const { ref } = useSectionInVeiw("Projects")

    return (
        <section ref={ref} className='scroll-mt-28 mb-28' id="projects">
            <Heading>My projects</Heading>
            <div>
                {projectval.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                ))}
            </div>
        </section>
    )
}

