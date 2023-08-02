import {useTranslations} from "use-intl";

export const WhoWeAre = () => {

    const text = useTranslations('whoWeAre');

    return (
        <section className="container px-2 mx-auto my-[96px]">
            <div className="xl:w-2/3">
                <h2 className="font-alata opacity-50 mb-[48px]">{text("title")}</h2>
                <p className="font-cabin text-5xl md:text-6xl font-bold">
                    {text("slogan1")}
                    <span className="block opacity-40 mt-2.5">
                         {text("slogan2")}
                    </span>
                </p>
            </div>
        </section>
    );
};