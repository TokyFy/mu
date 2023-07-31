/* eslint-disable react/no-unescaped-entities */
'use client'

import {NavBar} from "@components/NavBar";
import {Footer} from "@components/Footer";
import * as React from "react";
import {useTranslations} from "use-intl";

export default function Page() {

    const text = useTranslations('blog2');

    return (
        <div>
            <NavBar background/>
            <section className="container mx-auto my-24 px-4 max-w-[720px]">
                <header>
                    <h1 className="text-6xl font-cabin font-bold mb-12">{text("h1")}</h1>
                </header>

                <article>
                    <h2 className="text-xl font-bold font-cabin my-4">{text("h2-1")}</h2>
                    <p>
                        {text("p-1")}
                    </p>

                    <h2 className="text-xl font-bold font-cabin my-4">{text("h2-2")}</h2>
                    <p> {text("p-2")}</p>

                    <h2 className="text-xl font-bold font-cabin my-4">{text("h2-3")}</h2>

                    <ol>
                        <li className="my-6">
                            <strong className="mb-6">{text("h3-1")}</strong>
                            <p> {text("p-3")}</p>
                        </li>
                        <li className="my-6">
                            <strong className="mb-6">{text("h3-2")}</strong>
                            <p> {text("p-4")}</p>
                        </li>
                        <li className="my-6">
                            <strong className="mb-6">{text("h3-3")}</strong>
                            <p> {text("p-5")}</p>
                        </li>
                        <li className="my-6">
                            <strong className="mb-6">{text("h3-4")}</strong>
                            <p> {text("p-6")}</p>
                        </li>
                        <li className="my-6">
                            <strong className="mb-6">{text("h3-5")}</strong>
                            <p> {text("p-7")}</p>
                        </li>
                        <li className="my-6">
                            <strong className="mb-6">{text("h3-6")}</strong>
                            <p> {text("p-8")}</p>
                        </li>
                        <li className="my-6">
                            <strong className="mb-6">{text("h3-7")}</strong>
                            <p> {text("p-9")}</p>
                        </li>
                        <li className="my-6">
                            <strong className="mb-6">{text("h3-8")}</strong>
                            <p> {text("p-10")}</p>
                        </li>
                    </ol>

                    <h2 className="text-lg font-bold font-cabin mb-4">{text("h2-4")}</h2>
                    <p> {text("p-11")}</p>
                </article>
            </section>
            <Footer/>
        </div>
    )
}
