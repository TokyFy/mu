import * as Accordion from "@components/ui/Accordion";
import React from "react";
import {useTranslations} from "use-intl";

export const Advantages = () => {

    const text = useTranslations('servicePage');

    return (
        <section className="container mx-auto p-2 mb-[96px]">
            <Accordion.Root>
                <Accordion.Item
                    value={"v-1"}
                    header={
                        text.rich("advantage.advantage1.areas", {
                            br: (_chunks) => <br></br>,
                        })
                    }
                    content={text("advantage.advantage1.explanation")}/>

                <Accordion.Item
                    value={"v-2"}
                    header={
                        text.rich("advantage.advantage2.areas", {
                            br: (_chunks) => <br></br>,
                        })
                    }
                    content={text("advantage.advantage2.explanation")}/>

                <Accordion.Item
                    value={"v-3"}
                    header={
                        text.rich("advantage.advantage3.areas", {
                            br: (_chunks) => <br></br>,
                        })
                    }
                    content={text("advantage.advantage3.explanation")}/>

                <Accordion.Item
                    value={"v-4"}
                    header={
                        text.rich("advantage.advantage4.areas", {
                            br: (_chunks) => <br></br>,
                        })
                    }
                    content={text("advantage.advantage4.explanation")}/>

                <Accordion.Item
                    value={"v-5"}
                    header={
                        text.rich("advantage.advantage5.areas", {
                            br: (_chunks) => <br></br>,
                        })
                    }
                    content={text("advantage.advantage5.explanation")}/>
            </Accordion.Root>
        </section>
    );
};