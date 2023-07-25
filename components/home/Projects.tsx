import {Btn} from "@components/ui/btn";
import {Project} from "@components/ui/Project";


export const Projects = () => {
    return (
        <section className="container flex flex-col mx-auto mb-[96px]">
            <div className="flex justify-between grow items-center mb-[64px]">
                <h1 className="font-cabin text-5xl font-bold justify-between">Our <br/> Project</h1>
                <Btn dark outline value={"View all project"}/>
            </div>
            <div className="flex justify-around gap-12">
                <Project image={"/image/project2.jpg"} title={"Haron'tsika"} paragraph={"Haron'tsika - Marketing strategies"}/>
                <Project image={"/image/project1.jpg"} title={"Sync"} paragraph={"Sync - Marketing strategies"} elevated/>
                <Project image={"/image/project3.jpg"} title={"Hayra"} paragraph={"Hayra - Desing and Brand"}/>
            </div>
        </section>
    );
};