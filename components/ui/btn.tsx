import clsx from "clsx";
import * as React from 'react';


type Props = {
    value : string,
    outline ?: boolean,
    dark ? : boolean
};

export const Btn = ({value , outline , dark }: Props) => {

    const str = clsx(
        {
            "w-max px-4 py-2 rounded-full cursor-pointer font-medium ease-in-out duration-500  border-2 max-h-max" : true,
            "hover:border-primary-light hover:bg-transparent hover:text-primary-light hover:border-2" : !outline && !dark,
            "text-primary-light border-primary-light bg-transparent hover:bg-primary-light hover:text-primary-dark text-primary-light" : outline && !dark,
            "hover:border-primary-dark hover:bg-transparent hover:text-primary-dark hover:border-2" : !outline && dark,
            "text-primary-dark border-primary-dark bg-transparent hover:bg-primary-dark hover:text-primary-light text-primary-dark" : outline && dark,
        }
    )

    return (
        <div className={str}>
            {value}
        </div>
    );
};