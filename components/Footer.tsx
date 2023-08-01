import {Btn} from "@components/ui/btn";
import * as React from "react";
import {useTranslations} from "use-intl";
import { Facebook , Linkedin , Instagram } from 'lucide-react';
import Link from "next/link";

export const Footer = () => {

    const text = useTranslations('footer');

    return (
        <footer className="bg-primary-dark text-primary-light py-[96px] divide-y divide-neutral-700 px-2">
            <div className="container mx-auto flex lg:items-end justify-between py-[64px] gap-6 flex-col lg:flex-row">
                <p className="text-6xl font-bold">
                    {text.rich("cta",  {
                        br: (_chunks) => <br></br>,
                    })}
                </p>
                <div className="self-end">
                    <Link href={"/contact"}><Btn outline value={text("btn")}/></Link>
                </div>
            </div>
            <div className="container mx-auto font-alata flex  flex-col gap-12 md:flex-row justify-between py-[64px] text-base">
                <ul className="flex flex-col gap-4">
                    <li>
                        <p>{text("mail_cta")}</p>
                        <a className="opacity-50"  href="mailto:hello@multi-united.com">hello@multi-united.com</a>
                    </li>
                    <li>
                        <p>{text("phone-cta")}</p>
                        <a href="#" className="opacity-50">+261 34 45 883 12
                        </a>
                    </li>
                </ul>

                <ul>
                    <li>
                        <p>Location</p>
                        <p className="opacity-50">Antananarivo , Madagascar</p>
                    </li>
                    <li className="flex gap-2 my-4">
                        <span className="block"><a target="_blank" href="https://www.facebook.com/Multi_United-102634696249393"><Facebook/></a></span>
                        <span className="block"><a target="_blank" href="https://www.linkedin.com/company/multi-united/"><Linkedin/></a></span>
                    </li>
                </ul>
            </div>
            <div className="container mx-auto font-alata text-sm  pt-[48px] flex flex-col gap-6 md:flex-row justify-between">
                <ul className="flex gap-3 ">
                    <li>
                        {text("policy")}
                    </li>
                    <li>
                        {text("legal")}
                    </li>
                </ul>
                <p className="opacity-50">© MU. All rights reserved 2023</p>
            </div>
        </footer>
    );
};