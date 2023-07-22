import {Blog} from "@components/ui/Blog";

export const Blogs = () => {
    return (
        <section className="container mx-auto px-2 md:mx-auto pb-[96px]">
            <h2 className="font-alata opacity-50 mb-[48px]">BLOGS</h2>
            <div className="grid md:grid-cols-3 gap-x-8">
                <Blog cover={"/image/blog1.webp"} title={"Marketing is one of the most important aspects"}
                      resume={"Creating a positive image for your brand and building relationships with customers"}/>
                <Blog cover={"/image/blog2.webp"} title={"Search Engine Optimization"}
                      resume={"Process of increasing the visibility of a website"}/>
                <Blog cover={"/image/blog3.webp"} title={"Marketing is the process of promoting and selling products"}
                      resume={"It's an essential part of any successful business, helping to create brand awareness..."}/>
            </div>
        </section>
    );
};