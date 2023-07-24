import clsx from "clsx";
import * as React from 'react';


type Props = {
    value : string,
    outline ?: boolean
};

export const Btn = ({value , outline }: Props) => {

    const str = clsx(
        {
            "w-max px-4 py-2 rounded-full cursor-pointer font-medium ease-in-out duration-500 bg-primary-light text-primary-dark border-2 border-primary-light" : true,
            "hover:border-primary-light hover:bg-transparent hover:text-primary-light hover:border-2" : !outline,
            "text-primary-light border-primary-light bg-transparent hover:bg-primary-light hover:text-primary-dark text-primary-light" : outline
        }
    )

    return (
        <div className={str}>
            {value}
        </div>
    );
};