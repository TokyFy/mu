import {Btn} from "@components/ui/btn";
import {Project} from "@components/ui/Project";

import 'swiper/css';
import {Swiper, SwiperSlide} from 'swiper/react';
import {useWindowSize} from "@studio-freight/hamo";
import {useEffect, useRef, useState} from "react";
import {useTranslations} from "use-intl";


export const Projects = () => {

    const {width} = useWindowSize() as { width: number };
    const origin = useRef<HTMLDivElement>(null);
    const [slidePerSwipe, setSlidePerSwipe] = useState(3);

    const text = useTranslations('projects');

    useEffect(() => {
        if (origin.current !== null) document.documentElement.style.setProperty('--swiper-fix', origin.current.offsetLeft + "px");
    }, [width]);

    useEffect(() => {
        if (width > 1024) {
            setSlidePerSwipe(3)
            return
        }

        if (width > 720 && width < 1024) {
            setSlidePerSwipe(2.25)
            return
        }

        if (width > 720 && width < 770) {
            setSlidePerSwipe(2.125)
            return
        }

        if (width < 720) setSlidePerSwipe(1.5)
    }, [width])

    return (
        <section className="flex flex-col px-2 lg:mb-[96px]">
            <div className="container mx-auto flex justify-between grow items-center mb-[64px]">
                <h1 className="font-cabin text-5xl font-bold justify-between"
                    ref={origin}>
                    {text.rich("title",  {
                        br: (_chunks) => <br></br>,
                    })}
                </h1>
                <Btn dark outline value={text("btn")}/>
            </div>
            <div className="justify-around gap-12 lg:container lg:mx-auto cursor-all-scroll">
                <Swiper
                    draggable
                    slidesPerView={slidePerSwipe}
                    className={`first:pb-[96px] first:pl-[var(--swiper-fix)] lg:first:pl-0`}
                    spaceBetween={24}
                >
                    <SwiperSlide>
                        <Project image={"/image/project2.jpg"}
                                 title={text("project1.title")}
                                 paragraph={text("project1.role")}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Project image={"/image/project1.jpg"}
                                 title={text("project2.title")}
                                 paragraph={text("project2.role")} elevated/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Project image={"/image/project3.jpg"}
                                 title={text("project3.title")}
                                 paragraph={text("project2.role")}/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};