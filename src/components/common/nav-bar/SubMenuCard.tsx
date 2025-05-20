import React from 'react';
import NavTileCard from './Card';
import { StaticImageData } from 'next/image';

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
        <div className="min-w-[80vw] h-full bg-white p-4 flex">
            <div className="flex-1/2">
                {children}
            </div>
            <div className="grid auto-cols-max grid-cols-3 gap-4">
                {data.map((tile, index) => (
                    <NavTileCard imageSrc={tile.imageSrc} title={tile.title} key={index} />
                ))}
            </div>
        </div>
    );
};

export default SubMenuCard;
