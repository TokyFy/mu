import * as React from 'react';
import Image from "next/image";
import {Btn} from "@components/ui/btn";

export const NavBar = () => {
    return (
        <nav className="flex bg-primary-dark px-2 md:px-0 ">
            <div className="container mx-auto flex ">
                <div className="text-amber-400">
                    <Image src="/image/logo.svg" alt="Multi Agency logo" width={142} height={200} />
                </div>

                <div className="flex items-center ms-auto">
                    <div className="md:hidden">
                        <Image width={64} height={20} src={"/image/menu.svg"} alt={""}/>
                    </div>
                    <ul className="text-primary-light flex gap-12 pe-12 items-center max-md:hidden">
                        <li className="cursor-pointer">Home</li>
                        <li className="cursor-pointer">Teams</li>
                        <li className="cursor-pointer">Service</li>
                        <li className="cursor-pointer">Blog</li>
                        <li>
                            <Btn outline value={"Contact us"}/>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};