"use client"

import React from 'react';
import * as AccordionRd from '@radix-ui/react-accordion';
import clsx from "clsx";

type RootProps = {
    children : React.ReactElement[] | React.ReactElement;
}

type ItemsProps = {
    value : string,
    header : React.ReactElement,
    content : string
}

const Root = ({children} : RootProps) => (
    <AccordionRd.Root className="px-2 divide-y" type={"multiple"}>
        {children}
    </AccordionRd.Root>
);

const Item = ({value , header , content} : ItemsProps) => (
    <AccordionRd.Item value={value}>
        <AccordionTrigger
            className="group flex justify-between items-center grow  text-2xl text-left py-[32px] font-bold">
            {header}
        </AccordionTrigger>
        <AccordionContent
            className="overflow-hidden data-[state=open]:animate-slideDownAnime data-[state=closed]:animate-slideUpAnime">
            {content}
        </AccordionContent>
    </AccordionRd.Item>
)

const AccordionTrigger = React.forwardRef<
    HTMLButtonElement,
    { children: React.ReactElement, className?: string }>
(({children, className, ...props},
  forwardedRef) => (
    <AccordionRd.Header className="flex">
        <AccordionRd.Trigger
            className={clsx('AccordionTrigger', className)}
            {...props}
            ref={forwardedRef}
        >
            {children}
            <div className="group-data-[state=open]:rotate-90 transition">
                &#x2014;
            </div>
        </AccordionRd.Trigger>
    </AccordionRd.Header>
));

AccordionTrigger.displayName = 'AccordionTrigger';

const AccordionContent = React.forwardRef<
    HTMLDivElement, { children: string, className?: string }>
(({
      children,
      className,
      ...props
  }, forwardedRef) => (
    <AccordionRd.Content
        className={clsx(className)}
        {...props}
        ref={forwardedRef}
    >
        <div className="mb-[32px]">{children}</div>
    </AccordionRd.Content>
));

AccordionContent.displayName = 'AccordionTrigger';

export {Root , Item};