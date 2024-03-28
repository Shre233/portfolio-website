"use client";

import React, { useContext, useState } from 'react'
import { createContext } from 'react';
import type { SectionName } from '@/lib/types';


type ActiveSectionContextProviderProps = {
    children: React.ReactNode;
}

type ActiveSectionContextTypes = {
    activeSection: SectionName,
    setactiveSection: React.Dispatch<React.SetStateAction<SectionName>>,
    LastClick: number,
    setLastClick: React.Dispatch<React.SetStateAction<number>>
}

export const ActiveSectionContext = createContext<ActiveSectionContextTypes | null>(null);


export default function ActiveSectionContextProvider({ children, }: ActiveSectionContextProviderProps) {

    const [activeSection, setactiveSection] = useState<SectionName>("Home");
    const [LastClick, setLastClick] = useState<number>(0);

    return (<ActiveSectionContext.Provider value={{
        activeSection,
        setactiveSection,
        LastClick,
        setLastClick,
    }}>{children}</ActiveSectionContext.Provider>)
}

export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext)
    if (context == null)
        throw new Error("useActiveSectionContext must be used within an ActiveSectionContextProvider");
    return context;
}

