'use client'

import {WhoWeAre} from "@components/home/WhoWeAre";
import {Blogs} from "@components/home/Blogs";
import {Projects} from "@components/home/Projects";
import {Footer} from "@components/Footer";
import LenisWrapper from "@components/ui/LenisWrapper";
import {Heading} from "@components/home/Heading";
import {NavBar} from "@components/NavBar";
import * as React from "react";
import {Service} from "@components/home/Service";

export default function Home() {

    return (
       <LenisWrapper>
           <NavBar/>
           <Heading/>
           <WhoWeAre/>
           <Service/>
           <Projects/>
           <Blogs/>
           <Footer/>
       </LenisWrapper>
    )
}
