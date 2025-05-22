'use client'
import { useState, ReactNode } from "react";
import IconDownArrow from "../icons/IconDownArrow";

type AccordionItemProps = {
    title: string;
    children: ReactNode;
    defaultOpen?: boolean;
};

export function AccordionItem({ title, children, defaultOpen = false }: AccordionItemProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="border-b border-gray-200">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center px-4 py-3 text-left text-black font-medium hover:bg-gray-100 focus:outline-none"
            >
                <span>{title}</span>
                <IconDownArrow
                    className={`h-5 w-5 fill-blue transform transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"
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
    children: ReactNode;
};

export function Accordion({ children }: AccordionProps) {
    return <div className="w-full rounded-md  divide-y">{children}</div>;
}
