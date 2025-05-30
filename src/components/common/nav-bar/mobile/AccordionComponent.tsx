import React from 'react';
import { Accordion, AccordionItem } from '../../Accordion';
import { connectTileData, learnTileData, playTileData, shopTileData } from '../constant';


interface AccordionProps {
className?:string;
    iconColor: string|undefined;
    textColor: string |undefined;
    itemTextColor: string | undefined;
    borderColor: string | undefined;
}

export const NavMenuAccordion: React.FC<AccordionProps> = ({
    className,
    iconColor,
    textColor,
    itemTextColor,
    borderColor,
}) => {
    return (
        <Accordion className={className}>
            <AccordionItem borderColor={borderColor} textColor={textColor} iconColor={iconColor}  title="Shop">
                <ul>
                    {shopTileData.map((item, index) => (
                        <li key={index} className={`text-${itemTextColor} flex items-center gap-2`}>
                            {item.title}
                        </li>
                    ))}
                </ul>
            </AccordionItem>
            <AccordionItem borderColor={borderColor} textColor={textColor} iconColor={iconColor} title="Play">
                <ul>
                    {playTileData.map((item, index) => (
                        <li key={index} className={`text-${itemTextColor} flex items-center gap-2`}>
                            {item.title}
                        </li>
                    ))}
                </ul>
            </AccordionItem>
            <AccordionItem borderColor={borderColor}  textColor={textColor} iconColor={iconColor} title="Learn">
                <ul>
                    {learnTileData.map((item, index) => (
                        <li key={index} className={`text-${itemTextColor} flex items-center gap-2`}>
                            {item.title}
                        </li>
                    ))}
                </ul>
            </AccordionItem>
            <AccordionItem borderColor={borderColor} textColor={textColor} iconColor={iconColor} title="Connect">
                <ul>
                    {connectTileData.map((item, index) => (
                        <li key={index} className={`text-${itemTextColor} flex items-center gap-2`}>
                            {item.title}
                        </li>
                    ))}
                </ul>
            </AccordionItem>
        </Accordion>
    );
};
