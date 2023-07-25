import {Btn} from "@components/ui/btn";
import Image from "next/image";
import * as React from "react";

export const Footer = () => {
    return (
        <footer className="bg-primary-dark text-primary-light py-[96px] divide-y divide-neutral-700 px-2">
            <div className="container mx-auto flex lg:items-end justify-between py-[64px] gap-6 flex-col lg:flex-row">
                <p className="text-6xl font-bold">
                    Have An Idea?<br/>
                    Let’s Make And Scale It !
                </p>
                <div className="self-end">
                    <Btn outline value="Get in touch"/>
                </div>
            </div>
            <div className="container mx-auto font-alata flex  flex-col gap-12 md:flex-row justify-between py-[64px] text-base">
                <ul className="flex flex-col gap-2">
                    <li>Home</li>
                    <li>About us</li>
                    <li>Services</li>
                    <li>Blogs</li>
                </ul>

                <ul className="flex flex-col gap-4">
                    <li>
                        <p>Lets build</p>
                        <a href="#" className="opacity-50">hello@multy_united.com</a>
                    </li>
                    <li>
                        <p>Lets discus</p>
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
                        Privacy Policy
                    </li>
                    <li>
                        Legal Information
                    </li>
                </ul>
                <p className="opacity-50">© MU. All rights reserved 2023</p>
            </div>
        </footer>
    );
};