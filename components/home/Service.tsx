import {useTranslations} from "use-intl";

export const Service = () => {

    const text = useTranslations('service');

    return (
        <section className="container mx-auto py-[48px] px-4">
            <h1 className="font-cabin text-6xl font-bold mb-12">{text("title")}</h1>
            <div className="divide-y-[1px] divide-neutral-400">
                <div
                    className="group flex flex-col justify-between items-start gap-6 py-12 hover:bg-primary-dark hover:text-primary-light pl-4 transition duration-1000 ease-in-out md:flex-row">
                    <h3 className="font-alata text-2xl font-bold md:text-4xl group-hover:translate-x-6 transition-transform duration-1000 ease-in-out">
                        {text("service1.name")}</h3>
                    <p className="font-alata opacity-50 text-base md:text-lg max-w-lg max-ms:group-hover:translate-x-6">
                        {text("service1.detail")}
                    </p>
                </div>
                <div
                    className="group flex flex-col justify-between items-start gap-6 py-12 hover:bg-primary-dark hover:text-primary-light pl-4 transition duration-1000 ease-in-out md:flex-row">
                    <h3 className="font-alata text-2xl font-bold md:text-4xl group-hover:translate-x-6 transition-transform duration-1000 ease-in-out">
                        {text("service2.name")}</h3>
                    <p className="font-alata opacity-50 text-base md:text-lg max-w-lg max-ms:group-hover:translate-x-6">
                        {text("service2.detail")}
                    </p>
                </div>
                <div
                    className="group flex flex-col justify-between items-start gap-6 py-12 hover:bg-primary-dark hover:text-primary-light pl-4 transition duration-1000 ease-in-out md:flex-row">
                    <h3 className="font-alata text-2xl font-bold md:text-4xl group-hover:translate-x-6 transition-transform duration-1000 ease-in-out">
                        {text("service3.name")}</h3>
                    <p className="font-alata opacity-50 text-base md:text-lg max-w-lg max-ms:group-hover:translate-x-6">
                        {text("service3.detail")}
                    </p>
                </div>
                <div
                    className="group flex flex-col justify-between items-start gap-6 py-12 hover:bg-primary-dark hover:text-primary-light pl-4 transition duration-1000 ease-in-out md:flex-row">
                    <h3 className="font-alata text-2xl font-bold md:text-4xl group-hover:translate-x-6 transition-transform duration-1000 ease-in-out">
                        {text("service4.name")}</h3>
                    <p className="font-alata opacity-50 text-base md:text-lg max-w-lg max-ms:group-hover:translate-x-6">
                        {text("service4.detail")}
                    </p>
                </div>
            </div>
        </section>
    );
};