
"use client"
import React, { useEffect } from 'react'
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer'
import Heading from './Heading'
import { useActiveSectionContext } from '@/context/active-section-context'
import { useSectionInVeiw } from '@/lib/hooks'

export default function About() {

    const { ref } = useSectionInVeiw("About")


    return (
        <motion.section
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-[6rem] scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
            ref={ref}
        >
            <Heading>About Me</Heading>

            <p className="mb-3">
                Hello! I'm Shreyansh Jain, a passionate student currently pursuing a Bachelor's degree in
                <span className="font-medium">{" "}Computer Science and Engineering</span>{" "}from the prestigious <span className='font-medium'>Indian Institute of Information Technology, Kota.</span>{" "}
                My journey in the realm of technology has been an exhilarating exploration, constantly fueled by curiosity and a drive for innovation.{" "}
                With a keen interest in <span className='font-medium italic'>Web Development</span>, I specialize in the <span className='font-medium italic'>MERN (MongoDB, Express.js, React.js, Node.js) stack where I enjoy crafting robust and responsive web applications.{" "}</span>  
                The ability to seamlessly blend the front-end and back-end development aspects has always intrigued me, and I find it fascinating to
                build user-centric solutions that resonate with modern design principles.{" "}
                Beyond WebD, I harbor a deep fascination for <span  className="font-medium"> Data Science and Machine Learning.{" "}</span> 
                Exploring patterns in <span className='font-medium italic'>data, uncovering insights, and building predictive models </span> captivate me.
                I find joy in leveraging data driven approaches to solve real-world problems, whether it's optimizing processes, 
                making informed decisions, or powering intelligent systems.
            </p>

            <p>
            Whether you're interested in discussing a <span className='font-medium'>potential collaboration, sharing insights, or simply geeking out over the latest tech trends</span> ,
            I'd love to connect with you! Feel free to explore my portfolio and reach out to me via email or <span className='font-medium'> connect with me on LinkedIn</span>. 
            Let's collaborate, learn, and embark on an exciting journey together!
            </p>
        </motion.section>
    )
}
