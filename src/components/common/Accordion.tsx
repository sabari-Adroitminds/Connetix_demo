'use client'
import { useState, ReactNode } from "react";
import IconDownArrow from "../icons/IconDownArrow";
import clsx from "clsx";

type AccordionItemProps = {
    title: string;
    children: ReactNode;
    defaultOpen?: boolean;
    iconColor?: string;
    textColor?: string;
    borderColor?: string;
};

export function AccordionItem({ title, children, defaultOpen = false, iconColor, textColor = 'black', borderColor  }: AccordionItemProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className={`border-b border-${borderColor ? borderColor : "gray-200"} `}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full flex justify-between items-center px-4 py-3 text-left text-${textColor} font-medium hover:bg-gray-100 focus:outline-none`}
            >
                <span>{title}</span>
                <IconDownArrow
                    fill={iconColor ? iconColor : undefined}
                    className={`h-5 w-5  transform transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"
                        }`}
                />
            </button>
            <div
                className={`overflow-hidden transition-all duration-200 ease-in-out ${isOpen ? "max-h-screen py-2 px-4" : "max-h-0"
                    }`}
            >
                { <div className="text-black text-md ">{children}</div>}
            </div>
        </div>
    );
}

type AccordionProps = {
    className?: string;
    children: ReactNode;
};

export function Accordion({ children, className }: AccordionProps) {
    return <div className={clsx("w-full rounded-md  divide-y", className)}>{children}</div>;
}
