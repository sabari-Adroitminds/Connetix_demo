// components/Footer/FooterSection.tsx
import React from "react";

interface FooterSectionProps {
    title: string;
    items: string[];
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, items }) => {
    return (
        <div>
            <p className="font-semibold mb-3 text-white">{title}</p>
            <ul className="space-y-1 text-white/50">
                {items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default FooterSection;
