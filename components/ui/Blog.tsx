// @flow
import * as React from 'react';
import Image from "next/image";
import Link from "next-intl/link";

type Props = {
    cover : string,
    title : string,
    resume : string,
    link : string
};
export const Blog = ({cover , title , resume} : Props) => {
    return (
        <Link href="/blogs/Marketing-is-one-of-the-most-important-aspects" className="group p-2 cursor-pointer hover:bg-neutral-100">
            <div className="relative h-64">
                <Image className={"object-cover grayscale group-hover:grayscale-0 transition duration-500 ease-in-out"} fill src={cover} alt={"Marketing"}/>
            </div>
            <div className="my-4">
                <h2 className="text-lg font-bold">{title}</h2>
                <p className="my-2">{resume}</p>
            </div>
        </Link>
    );
};