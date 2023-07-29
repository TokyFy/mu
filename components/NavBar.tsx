'use client'

import * as React from 'react';
import Image from "next/image";
import {Btn} from "@components/ui/btn";
import Link from "next/link";
import {useEffect, useState} from "react";
import {useTranslations} from "use-intl";

type props = {
    background?: boolean
}

export const NavBar = ({background}: props) => {

    const text = useTranslations('NavBar');


    const [open, setOpen] = useState<boolean | null>(null);

    useEffect(() => {
        document.body.addEventListener("wheel", (ev) => {
            if (open) setOpen(false);
        })
    }, [open])

    return (
        <nav
            className={`w-full flex items-center md:px-0 h-20 z-50 transition duration-500 delay-500 ${background || open ? "bg-primary-dark" : null} ${open ? "sticky top-0" : null}`}>
            <div className="container mx-auto flex grow">
                <div className="text-amber-400">
                    <Image src="/image/logo.svg" alt="Multi Agency logo" width={122} height={200}/>
                </div>
                <div className="flex items-center ms-auto">
                    <div className={`md:hidden w-[32px] mr-4 cursor-pointer`} onClick={() => setOpen(!open)}>
                        <div
                            className={`bg-primary-light h-[2px] w-full my-2 transition duration-500 ${open ? "translate-x-[5px]" : null}`}></div>
                        <div
                            className={`bg-primary-light h-[2px] w-full my-2 transition duration-500 ${open ? "-translate-x-[5px]" : null}`}></div>
                    </div>
                    <ul className="hidden text-primary-light text-sm gap-12 pe-12 items-center md:flex">
                        <li className="cursor-pointer opacity-50 hover:opacity-100 transition ease-in"><Link
                            href={"/"}>{text("menu1")}</Link></li>
                        <li className="cursor-pointer opacity-50 hover:opacity-100 transition ease-in"><Link
                            href={"/about"}>{text("menu2")}</Link></li>
                        <li className="cursor-pointer opacity-50 hover:opacity-100 transition ease-in">{text("menu3")}</li>
                        <li>
                            <Link href={"/contact"}>
                                <Btn outline value={text("menu4")}/>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div
                className={`absolute flex flex-col bg text-primary-light w-full top-0 left-0 md:hidden z-[9999] overflow-hidden overscroll-contain h-0 ${open !== null ? (open ? "animate-menuOpenAnime" : "animate-menuCloseAnime") : null}`}>
                <div className="container mx-auto flex opacity-0 ">
                    <div className="text-amber-400">
                        <Image src="/image/logo.svg" alt="Multi Agency logo" width={142} height={200}/>
                    </div>
                    <div className="flex items-center ms-auto" onClick={() => setOpen(!open)}>
                        <div className="w-[32px] mr-4 cursor-pointer">
                            <div className="bg-primary-light h-[2px] w-full my-2 -translate-x-1"></div>
                            <div className="bg-primary-light h-[2px] w-full my-2 translate-x-1"></div>
                        </div>
                    </div>
                </div>
                <ul className="bg-primary-dark text-primary-light font-alata gap-12 grow flex flex-col justify-center px-2 py-12 text-4xl">
                    <li className="cursor-pointer opacity-50 hover:opacity-100 transition ease-in"><Link
                        href={"/"}>Home</Link></li>
                    <li className="cursor-pointer opacity-50 hover:opacity-100 transition ease-in"><Link
                        href={"/about"}>About us</Link></li>
                    <li className="cursor-pointer opacity-50 hover:opacity-100 transition ease-in">Blog</li>
                </ul>
                <div className="bg-primary-dark flex justify-between px-2 pb-16">
                    <Btn outline value={"Contact us"}/>
                    <div className="flex gap-6">
                        <Btn outline value={"Ln"}/>
                        <Btn outline value={"Fb"}/>
                    </div>
                </div>
            </div>
        </nav>
    );
};