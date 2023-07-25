import * as Accordion from "@components/ui/Accordion";
import React from "react";

export const Advantages = () => {
    return (
        <section className="container mx-auto p-2 mb-[96px]">
            <Accordion.Root>
                <Accordion.Item
                    value={"v-1"}
                    header={<p>Experienced <br/> professionals</p>}
                    content={" We specialize in helping businesses reach their highest potential by developing creative and effective marketing strategies tailored to their individual needs."}/>

                <Accordion.Item
                    value={"v-2"}
                    header={<p>Comprehensive <br/> services</p>}
                    content={" We specialize in helping businesses reach their highest potential by developing creative and effective marketing strategies tailored to their individual needs."}/>

                <Accordion.Item
                    value={"v-3"}
                    header={<p>Customized <br/> strategies</p>}
                    content={" We specialize in helping businesses reach their highest potential by developing creative and effective marketing strategies tailored to their individual needs."}/>

                <Accordion.Item
                    value={"v-4"}
                    header={<p>Data-driven <br/> approach</p>}
                    content={" We specialize in helping businesses reach their highest potential by developing creative and effective marketing strategies tailored to their individual needs."}/>

                <Accordion.Item
                    value={"v-5"}
                    header={<p>Proven <br/> results</p>}
                    content={" We specialize in helping businesses reach their highest potential by developing creative and effective marketing strategies tailored to their individual needs."}/>
            </Accordion.Root>
        </section>
    );
};