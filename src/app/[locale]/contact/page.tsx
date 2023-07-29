'use client'

import LenisWrapper from "@components/ui/LenisWrapper";
import Image from "next/image";

import * as React from "react";
import {Footer} from "@components/Footer";
import Link from "next/link";
import {useTranslations} from "use-intl";

export default function Contact() {

    const text = useTranslations('contactPage');

    return (
        <LenisWrapper>
            <section className="container mx-auto px-4 py-12">
                <div className="container mx-auto flex grow justify-between items-center">
                    <div className="text-amber-400">
                        <Image src="/image/logo-w-bg.svg" alt="Multi Agency logo" width={122} height={200}/>
                    </div>
                    <div>
                        <p className="underline"><Link href={"/"}>{text("back_home")}</Link></p>
                    </div>
                </div>
                <div className="divide-y-[1px] divide-neutral-400">
                    <div className="py-12 text-2xl">
                        <p className="font-alata underline opacity-50 mb-4">{text("location")}</p>
                        <p>
                            Madagascar<br/>
                            Antananarivo 101<br/>
                            Planton Ambaranjana<br/>
                            Villa MAHI lot II U 89 Bis E Cité
                        </p>
                    </div>
                    <div className="py-12 text-2xl">
                        <p className="font-alata underline opacity-50 mb-4">{text("support")}</p>
                        <p>
                            +261 01 110 01<br/>
                            hello<span className="font-alata">@</span>multi-united.com<br/>
                        </p>
                    </div>
                    <div className="py-12 text-2xl">
                        <p className="font-alata underline opacity-50 mb-4">{text("social")}</p>
                        <p>
                            FACEBOOK<br/>
                            INSTAGRAM<br/>
                            LINKEDIN<br/>
                        </p>
                    </div>
                </div>
            </section>
            <Footer/>
        </LenisWrapper>
    );
};