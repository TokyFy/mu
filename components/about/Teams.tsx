import {Team} from "@components/ui/Team";

const Teams = () => {
    return (
        <section className="container mx-auto px-2 my-16">
            <h2 className="font-alata text-3xl font-bold mb-[32px] ">A Team Of 4 Professionals Based In Madagascar</h2>
            <ul className="flex flex-col gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-2">
                <li>
                    <Team/>
                </li>
                <li>
                    <Team/>
                </li>
                <li>
                    <Team/>
                </li>
                <li>
                    <Team/>
                </li>
            </ul>
        </section>
    );
};

export default Teams;