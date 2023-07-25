"use client"
import {Hero} from "@components/home/Hero";
import {WhoWeAre} from "@components/home/WhoWeAre";
import {Blogs} from "@components/home/Blogs";
import {Projects} from "@components/home/Projects";
import {NavBar} from "@components/NavBar";
import {Footer} from "@components/Footer";
import LenisWrapper from "@components/ui/LenisWrapper";

export default function Home() {

    return (
       <LenisWrapper>
           <NavBar/>
           <Hero/>
           <WhoWeAre/>
           <Projects/>
           <Blogs/>
           <Footer/>
       </LenisWrapper>
    )
}
