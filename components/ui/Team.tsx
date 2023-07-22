import Image from "next/image";

type Props = {

};

export const Team = (props: Props) => {
    return (
        <div className="p-8 bg-gray-100 rounded">
            <div className="relative aspect-square w-full">
                <Image fill src={"/image/antsa.png"} alt={""}/>
            </div>
            <div className="py-4">
                <p className="font-alata text-2xl font-bold">Antsa <span className="opacity-50 text-xl">&#x2014; Lead Designer</span></p>
            </div>
        </div>
    );
};