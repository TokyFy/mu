{/* eslint-disable react/no-unescaped-entities */}

import Image from "next/image";

export const Hero = () => {
    return (
        <section className="container mx-auto flex px-2 my-20 md:my-0 md:h-[60vh] md:items-center  md:mt-[48px]">
            <div className="w-3/5 max-xl:w-full">
                <h1 className="text-6xl mb-6 md:mb-[96px]">Creative marketing solutions, crafted for success.</h1>
                <h2 className="font-alata text-2xl mb-4 w-4/5">We create winning ideas to ignite the most distinctive campaigns in world.</h2>

                <p className="w-4/5 text-lg">
                    From captivating designs to compelling campaigns, we'll bring your vision to life in ways that
                    captivate audiences and drive results. Experience the transformative power of our creativity and
                    unlock new possibilities for your brand's success.
                </p>
            </div>
            <div className="w-2/5 flex justify-center max-xl:hidden">
                <Image width={250} height={200} src={"/image/spinner.svg"} alt={"spinner image"}/>
            </div>
        </section>
    );
};