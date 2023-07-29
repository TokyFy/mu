import {Blog} from "@components/ui/Blog";
import {Btn} from "@components/ui/btn";
import {useTranslations} from "use-intl";

export const Blogs = () => {

    const text = useTranslations('blogs');

    return (
        <section className="container mx-auto px-2 md:mx-auto pb-[96px]">
            <h2 className="font-alata opacity-50 mb-[48px]">BLOGS</h2>
            <div className="flex justify-between grow items-center mb-[64px]">
                <h1 className="font-cabin text-5xl font-bold justify-between">
                    {text.rich("title", {
                        br: (_chunks) => <br></br>,
                    })}
                </h1>
                <Btn dark outline value={text("btn")}/>
            </div>
            <div className="grid md:grid-cols-3 gap-x-8">
                <Blog cover={"/image/blog1.webp"}
                      title={text("blog1.title")}
                      resume={text("blog1.preview")}/>
                <Blog cover={"/image/blog2.webp"}
                      title={text("blog2.title")}
                      resume={text("blog2.preview")}/>
                <Blog cover={"/image/blog3.webp"}
                      title={text("blog3.title")}
                      resume={text("blog3.preview")}/>
            </div>
        </section>
    );
};