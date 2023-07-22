import {Hero} from "@components/home/Hero";
import {WhoWeAre} from "@components/home/WhoWeAre";
import {Blogs} from "@components/home/Blogs";

export default function Home() {
    return (
        <main className="flex flex-col ">
            <Hero/>
            <WhoWeAre/>
            <Blogs/>
        </main>
    )
}
