'use client'
import { useState, ReactNode } from "react";
import { ChevronDown } from "lucide-react";

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
                <ChevronDown
                    className={`h-5 w-5 transform transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"
                        }`}
                />
            </button>
            <div
                className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-screen py-2 px-4" : "max-h-0"
                    }`}
            >
                {isOpen && <div className="text-black text-md">{children}</div>}
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
