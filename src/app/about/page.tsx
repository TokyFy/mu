import Presentation from "@components/about/Presentation";
import Teams from "@components/about/Teams";
import Accordion from "@components/ui/Accordion";


const Page = () => {
    return (
        <main>
            <Presentation/>
            <Teams/>
            <Accordion/>
        </main>
    );
};

export default Page;