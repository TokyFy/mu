// @flow
import * as React from 'react';
import {NavBar} from "@components/NavBar";
import {Footer} from "@components/Footer";
import LenisWrapper from "@components/ui/LenisWrapper";

export default function Service() {
    return (
        <LenisWrapper>
            <NavBar background/>
            <section className="container mx-auto py-[48px] px-4">
                <h1 className="font-cabin text-6xl font-bold mb-12">What we do :</h1>
                <div className="divide-y-[1px] divide-neutral-400">
                    <div className="flex justify-between items-start gap-6 py-12 hover:bg-primary-dark hover:text-primary-light pl-4 transition duration-1000 ease-in-out">
                        <h3 className="font-alata text-2xl font-bold md:text-4xl">Digital strategy</h3>
                        <p className="font-alata opacity-50 text-base md:text-lg max-w-lg ">
                            We specialize in helping businesses reach their highest
                            potential by developing creative and
                            effective marketing strategies tailored to their individual needs.
                        </p>
                    </div>
                    <div className="flex justify-between items-start gap-6 py-12 hover:bg-primary-dark hover:text-primary-light pl-4 transition duration-1000 ease-in-out">
                        <h3 className="font-alata text-2xl font-bold md:text-4xl">Brand Architecture</h3>
                        <p className="font-alata opacity-50 text-base md:text-lg max-w-lg ">
                            We specialize in helping businesses reach their highest
                            potential by developing creative and
                            effective marketing strategies tailored to their individual needs.
                        </p>
                    </div>
                    <div className="flex justify-between items-start gap-6 py-12 hover:bg-primary-dark hover:text-primary-light pl-4 transition duration-1000 ease-in-out">
                        <h3 className="font-alata text-2xl font-bold md:text-4xl">Social Media Management</h3>
                        <p className="font-alata opacity-50 text-base md:text-lg max-w-lg ">
                            We specialize in helping businesses reach their highest
                            potential by developing creative and
                            effective marketing strategies tailored to their individual needs.
                        </p>
                    </div>
                    <div className="flex justify-between items-start gap-6 py-12 hover:bg-primary-dark hover:text-primary-light pl-4 transition duration-1000 ease-in-out">
                        <h3 className="font-alata text-2xl font-bold md:text-4xl">Web development</h3>
                        <p className="font-alata opacity-50 text-base md:text-lg max-w-lg ">
                            We specialize in helping businesses reach their highest
                            potential by developing creative and
                            effective marketing strategies tailored to their individual needs.
                        </p>
                    </div>
                    <div className="flex justify-between items-start gap-6 py-12 hover:bg-primary-dark hover:text-primary-light pl-4 transition duration-1000 ease-in-out">
                        <h3 className="font-alata text-2xl font-bold md:text-4xl">Photo, video and Motion</h3>
                        <p className="font-alata opacity-50 text-base md:text-lg max-w-lg ">
                            We specialize in helping businesses reach their highest
                            potential by developing creative and
                            effective marketing strategies tailored to their individual needs.
                        </p>
                    </div>
                </div>

                <div className="container mx-auto flex lg:items-end justify-between py-[64px] ">
                    <p className="text-5xl font-bold leading-relaxed">
                        Contact us and let’s work together, it’s just easy as
                        writing an email : <span className="font-alata inline-block text-4xl border-b-2 border-primary-dark p-3">hello@multi-united.com</span>
                    </p>
                </div>

            </section>
            <Footer/>
        </LenisWrapper>
    );
};