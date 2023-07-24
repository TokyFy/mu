// @flow
import * as React from 'react';
import Image from "next/image";

type Props = {
    cover : string,
    title : string,
    resume : string
};
export const Blog = ({cover , title , resume} : Props) => {
    return (
        <div className="p-2 cursor-pointer hover:bg-neutral-100">
            <div className="relative h-64">
                <Image className={"object-cover"} fill src={cover} alt={"Marketing"}/>
            </div>
            <div className="my-4">
                <h2 className="font-alata text-lg">{title}</h2>
                <p className="my-2">{resume}</p>
            </div>
        </div>
    );
};