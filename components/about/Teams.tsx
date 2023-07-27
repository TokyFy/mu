'use client'

import {Team} from "@components/ui/Team";
import {useWindowSize} from "@studio-freight/hamo";
import React, {useEffect, useRef, useState} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';

const Teams = () => {

    const {width} = useWindowSize() as { width: number };

    const origin = useRef<HTMLDivElement>(null);

    const [slidePerSwipe, setSlidePerSwipe] = useState(3);

    useEffect(() => {
        if (origin.current !== null)  document.documentElement.style.setProperty('--swiper-fix', origin.current.offsetLeft + "px");
    }, [width]);

    useEffect(() => {
        if (width > 1024) {
            setSlidePerSwipe(3.125)
            return
        }

        if (width > 720 && width < 1024) {
            setSlidePerSwipe(2.5)
            return
        }

        if (width > 720 && width < 770) {
            setSlidePerSwipe(1.75)
            return
        }

        if (width < 720) setSlidePerSwipe(1.25)
    }, [width])

    return (
        <section className="px-2 my-16">
            <div className="container mx-auto">
                <h2 className="font-alata text-3xl font-bold mb-[32px]" ref={origin}>A Team Of 4 Professionals Based In Madagascar</h2>
            </div>
            <div className="container mx-auto">
                <p className="font-cabin text-4xl md:text-5xl font-bold">
                    We’re a highly collaborative team that enjoys working together and getting engaged in sharing our
                    knowledge and experience. When our team starts the next project, we know that we can handle
                    it with a wide range of skills and can count on each other.
                </p>
            </div>
            <div className="justify-around gap-12 mt-12 cursor-all-scroll">
                <Swiper
                    draggable
                    slidesPerView={slidePerSwipe}
                    className={`first:pl-[var(--swiper-fix)]`}
                    spaceBetween={24}
                >
                    <SwiperSlide>
                        <Team image={"/image/antsa.png"} name={"Antsa"} role={"Lead Designer"}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Team image={"/image/toky2.png"} name={"Toky"} role={"Lead Developer"}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Team image={"/image/safidy.png"} name={"Safidy"} role={"Communication Manager"}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Team image={"/image/tsilefy.png"} name={"Tsilefy"} role={"Marketing Manager"}/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Teams;