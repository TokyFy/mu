'use client'

import Presentation from "@components/about/Presentation";
import Teams from "@components/about/Teams";
import React from "react";
import {Advantages} from "@components/about/Advantages";
import LenisWrapper from "@components/ui/LenisWrapper";
import {NavBar} from "@components/NavBar";
import {Footer} from "@components/Footer";


const Page = () => {
    return (
        <LenisWrapper>
            <NavBar background/>
            <Presentation/>
            <Teams/>
            <Advantages/>
            <Footer/>
        </LenisWrapper>
    );
};

export default Page;