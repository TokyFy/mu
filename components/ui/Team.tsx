import Image from "next/image";

type Props = {
    image : string ,
    name : string ,
    role : string
};

export const Team = ({image , name , role} : Props) => {
    return (
        <div className="p-4 bg-gray-100 rounded">
            <div className="relative aspect-square w-full">
                <Image fill src={image} alt={""}/>
            </div>
            <div className="pt-4">
                <p className="font-alata text-xl font-bold">{name} <span className="opacity-50 text-xl">&#x2014; {role}</span></p>
            </div>
        </div>
    );
};