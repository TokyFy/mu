'use client'
import {useTranslations} from "use-intl";

{/* eslint-disable react/no-unescaped-entities */}

import {NavBar} from "@components/NavBar";
import {Footer} from "@components/Footer";
import * as React from "react";

export default function Page() {

    const text = useTranslations('blog1');


    return (
        <div>
            <NavBar background/>
            <section className="container mx-auto my-24 px-4 max-w-[720px]">
                <h1 className="text-6xl font-cabin font-bold">{text("h1")}</h1>
                <div className="my-8">
                    <h2 className="text-lg font-bold font-cabin mb-4">{text("h2-1")}</h2>
                    <p>
                        {text("p-1")}
                    </p>
                </div>

                <div className="my-8">
                    <h2 className="text-lg font-bold font-cabin mb-4">{text("h2-2")}</h2>
                    <p>
                        {text("p-2")}
                    </p>
                </div>

                <div className="my-8">
                    <h2 className="text-lg font-bold font-cabin mb-4">{text("h2-3")}</h2>
                    <p>
                        {text("p-3")}
                    </p>
                </div>

                <div className="my-8">
                    <h2 className="text-lg font-bold font-cabin mb-4">{text("h2-4")}</h2>
                    <p>
                        {text("p-4")}
                    </p>
                </div>
            </section>
            <Footer/>
        </div>
    )
}
