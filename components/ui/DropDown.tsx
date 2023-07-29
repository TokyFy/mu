import React, {useEffect} from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Link from 'next-intl/link';
import {usePathname} from 'next-intl/client';


type props = {
    trigger:string
}

const Dropdown = ({trigger} : props) => {

    const pathname = usePathname();

    useEffect(() => {
        console.log(pathname)
    }, [pathname]);


    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <button className="IconButton" aria-label="Customise options">
                    <p className="opacity-50 hover:opacity-100"><span className="text-lg pr-2 uppercase">{trigger}</span>⌘</p>
                </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content className="text-center bg-neutral-200 text-primary-dark p-2 px-4 font-bold bottom-2 border-primary-dark z-50" sideOffset={5}>
                    <DropdownMenu.Item  className="cursor-pointer my-2 hover:underline">
                       <Link href={pathname} locale={"fr"}>Français</Link>
                    </DropdownMenu.Item>

                    <DropdownMenu.Item  className="cursor-pointer my-2 hover:underline">
                        <Link href={pathname}  locale={"en"}>English</Link>
                    </DropdownMenu.Item>

                    <DropdownMenu.Item  className="cursor-pointer my-2 hover:underline">
                        <Link href={pathname} locale={"de"}>Deutsch</Link>
                    </DropdownMenu.Item>

                    <DropdownMenu.Item  className="cursor-pointer my-2 hover:underline">
                        <Link href={pathname} locale={"ko"}>한국인</Link>
                    </DropdownMenu.Item>

                    <DropdownMenu.Arrow/>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
};

export default Dropdown;