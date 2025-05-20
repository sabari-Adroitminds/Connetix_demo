import React from 'react';

import { StaticImageData } from 'next/image';
import NavTileCard from './Card';

interface TileItem {
    title: string;
    imageSrc: StaticImageData;
}

interface SubMenuCardProps {
    data: TileItem[];
    children?: React.ReactNode;
}

const SubMenuCard: React.FC<SubMenuCardProps> = ({ data, children }) => {
    return (
        <div className="min-w-[90vw] h-full max-h-[88vh] bg-white p-12 flex">
            <div className="flex-1/2">
                {children}
            </div>
            <div className="grid max-h-full auto-cols-max grid-cols-3 gap-4">
                {data.map((tile, index) => (
                    <NavTileCard imageSrc={tile.imageSrc} title={tile.title} key={index} />
                ))}
            </div>
        </div>
    );
};

export default SubMenuCard;
