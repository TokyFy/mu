"use client"

import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

import React from "react";

type props = {
    children : React.ReactElement[] | React.ReactElement
}

export default function LenisWrapper({children} : props) {

    // @ts-ignore
    const lenis = useLenis(({ scroll }) => {
        // called every scroll
    })

    return (
        <ReactLenis root>
            <main data-scroll-container="" id="main" className="flex flex-col">
                {children}
            </main>
        </ReactLenis>
    )
}
