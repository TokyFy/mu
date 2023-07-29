import * as React from 'react';
import {useTranslations} from "use-intl";

export const Presentation = () => {

    const text = useTranslations('servicePage');

    return (
        <section className="container mx-auto px-2 pt-[96px] font-alata">
            <div className="xl:w-2/3">
                <h1 className="text-5xl">{text("intro")}</h1>

                <p className="my-8">
                    {text("presentation_one")}
                </p>

                <p className="my-8">
                    {text("presentation_two")}
                </p>
            </div>
        </section>
    );
};

export default Presentation;