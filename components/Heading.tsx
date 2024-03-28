import { type } from 'os'
import React from 'react'

type SectionProps = {
    children: React.ReactNode;
};

export default function Heading({ children }: SectionProps) {
    return (
        <h2 className='text-3xl mb-8 text-center font-medium capitalize'>{children}</h2>
    )
}
