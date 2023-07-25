import Image from "next/image";
import clsx from "clsx";

type Props = {
    image : string,
    title : string,
    paragraph : string,
    elevated ?: boolean
}

export const Project = ({image , paragraph , title , elevated} : Props) => {
    return (
        <div className={clsx("group relative max-w-max cursor-pointer text-primary-light hover:scale-[1.025] transition ease-in duration-300" , elevated && "lg:translate-y-24")}>
            <Image className="brightness-20 group-hover:brightness-50 transition ease-in duration-300" width={500}  height={300} src={image} alt={"old machintosh"}/>
            <div className="absolute flex flex-col justify-between bg-black bg-opacity-5 w-full h-full top-0 left-0 bg-blend-multiply p-8">
                <p className="text-2xl font-bold">{title}</p>
                <p className="text-xl font-alata group-hover:underline">{paragraph}</p>
            </div>
        </div>
    );
};