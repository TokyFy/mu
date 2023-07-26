// @flow
import * as React from 'react';
import {NavBar} from "@components/NavBar";
import Image from "next/image";

type Props = {};
export const Heading = (props: Props) => {
    return (
        <header className="bg-primary-dark flex flex-col items-center h-screen mb-12 overflow-hidden">
            <NavBar/>
            <section className="text-primary-light container mx-auto flex px-2 mt-[80px] py-[64px] md:py-[96px] z-[1]">
                <div className="w-full lg:w-2/3">
                    <h1 className="text-6xl mb-6 font-cabin font-bold">Creative marketing solutions, crafted for
                        <span className="">success</span>.</h1>
                    <h2 className="font-alata text-2xl mb-4 w-4/5 md:py-8">We create winning ideas to ignite the most
                        distinctive
                        campaigns in world.</h2>

                    <p className="text-lg opacity-50">
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        From captivating designs to compelling campaigns, we'll bring your vision to life in ways that
                        captivate audiences and drive results. Experience the transformative power of our creativity and
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        unlock new possibilities for your brand's success.
                    </p>
                </div>
                <div className="w-2/5 justify-center hidden lg:flex invert-0 animate-spinAnime">
                    <Image className="invert" width={250} height={200} src={"/image/spinner.svg"} alt={"spinner image"}/>
                </div>
            </section>
            <video poster={"/image/poster.webp"} autoPlay loop muted className="absolute  w-auto min-w-full max-h-full max-w-none brightness-[.25]">
                <source src="image/homevideo.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </header>
    );
};