{/* eslint-disable react/no-unescaped-entities */
}

import Image from "next/image";

export const Hero = () => {
    return (
        <section className="container mx-auto flex px-2 mt-[80px] py-[64px] md:py-[96px]">
            <div className="w-full lg:w-2/3">
                <h1 className="text-6xl mb-6 font-cabin font-bold">Creative marketing solutions, crafted for
                    <span className="">success</span>.</h1>
                <h2 className="font-alata text-2xl mb-4 w-4/5 md:py-8">We create winning ideas to ignite the most distinctive
                    campaigns in world.</h2>

                <p className="text-lg">
                    From captivating designs to compelling campaigns, we'll bring your vision to life in ways that
                    captivate audiences and drive results. Experience the transformative power of our creativity and
                    unlock new possibilities for your brand's success.
                </p>
            </div>
            <div className="w-2/5 justify-end hidden lg:flex">
                <Image width={250} height={200} src={"/image/spinner.svg"} alt={"spinner image"}/>
            </div>
        </section>
    );
};