import {Btn} from "@components/ui/btn";
import * as React from "react";
import {useTranslations} from "use-intl";

export const Footer = () => {

    const text = useTranslations('footer');
    const navText = useTranslations('NavBar');

    return (
        <footer className="bg-primary-dark text-primary-light py-[96px] divide-y divide-neutral-700 px-2">
            <div className="container mx-auto flex lg:items-end justify-between py-[64px] gap-6 flex-col lg:flex-row">
                <p className="text-6xl font-bold">
                    {text.rich("cta",  {
                        br: (_chunks) => <br></br>,
                    })}
                </p>
                <div className="self-end">
                    <Btn outline value={text("btn")}/>
                </div>
            </div>
            <div className="container mx-auto font-alata flex  flex-col gap-12 md:flex-row justify-between py-[64px] text-base">
                <ul className="flex flex-col gap-2">
                    <li>{navText("menu1")}</li>
                    <li>{navText("menu2")}</li>
                    <li>{navText("menu3")}</li>
                    <li>{navText("menu4")}</li>
                </ul>

                <ul className="flex flex-col gap-4">
                    <li>
                        <p>{text("mail_cta")}</p>
                        <a href="#" className="opacity-50">hello@multi-united.com</a>
                    </li>
                    <li>
                        <p>{text("phone-cta")}</p>
                        <a href="#" className="opacity-50">+261 20 202 20</a>
                    </li>
                </ul>

                <ul>
                    <li>
                        <p>Location</p>
                        <p className="opacity-50">Antananarivo , Madagascar</p>
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