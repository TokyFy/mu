// @flow
import * as React from 'react';
import Image from "next/image";
import {useTranslations} from "use-intl";

type Props = {};
export const Heading = (props: Props) => {

    const text = useTranslations('Heading');

    return (
        <header className="bg-primary-dark flex flex-col items-center h-[90vh] mb-24">
            <section
                className="text-primary-light container grow items-center mx-auto flex px-2 md:py-[64px] lg:py-[96px] z-[1]">
                <div className="w-full lg:w-2/3">
                    <h1 className="text-4xl md:text-6xl mb-6 font-cabin font-bold">{text("slogan")}</h1>
                    <h2 className="font-alata text-2xl mb-4 w-4/5 md:py-8">
                        {text("engagement")}
                    </h2>
                    <p className="text-lg mb-32 md:mb-0 opacity-50">
                        {text("value")}
                    </p>
                </div>
                <div className="w-2/5 justify-center hidden lg:flex invert-0 animate-spinAnime">
                    <Image className="invert" width={250} height={200} src={"/image/spinner.svg"}
                           alt={"spinner image"}/>
                </div>
            </section>
            <div className="overflow-hidden absolute w-screen h-screen top-0 left-0">
                <video poster={"/image/poster.webp"} autoPlay loop muted className="h-screen w-full object-cover brightness-[.2]">
                    <source src="image/homevideo.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
        </header>
    );
};