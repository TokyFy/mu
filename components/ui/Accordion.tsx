"use client"

import React from 'react';
import * as AccordionRd from '@radix-ui/react-accordion';
import clsx from "clsx";

const Accordion = () => (
    <AccordionRd.Root className="px-2 divide-y" type="single" defaultValue="item-1" collapsible>

        <AccordionRd.Item className="AccordionItem" value="item-1">
            <AccordionTrigger
                className="group flex justify-between items-center grow font-alata text-2xl text-left py-[32px]">
                <p>Experienced <br/> professionals</p>
            </AccordionTrigger>
            <AccordionContent
                className="mb-[32px] overflow-hidden">Yes.
                It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionRd.Item>

        <AccordionRd.Item className="AccordionItem" value="item-2">
            <AccordionTrigger
                className="flex justify-between items-center grow font-alata text-2xl text-left py-[32px]">
                <p>Experienced <br/> professionals</p>
            </AccordionTrigger>
            <AccordionContent className="pb-[32px]">Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionRd.Item>

        <AccordionRd.Item className="AccordionItem" value="item-3">
            <AccordionTrigger
                className="flex justify-between items-center grow font-alata text-2xl text-left py-[32px]">
                <p>Experienced <br/> professionals</p>
            </AccordionTrigger>
            <AccordionContent className="pb-[32px] transition duration-1000">
                Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionRd.Item>

    </AccordionRd.Root>
);

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
        <div>{children}</div>
    </AccordionRd.Content>
));

AccordionContent.displayName = 'AccordionTrigger';

export default Accordion;