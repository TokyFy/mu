"use client"
import {Hero} from "@components/home/Hero";
import {WhoWeAre} from "@components/home/WhoWeAre";
import {Blogs} from "@components/home/Blogs";
import {Projects} from "@components/home/Projects";
import {Footer} from "@components/Footer";
import LenisWrapper from "@components/ui/LenisWrapper";
import {Heading} from "@components/home/Heading";

export default function Home() {

    return (
       <LenisWrapper>
           <Heading/>
           {/*<Hero/>*/}
           <WhoWeAre/>
           <Projects/>
           <Blogs/>
           <Footer/>
       </LenisWrapper>
    )
}
