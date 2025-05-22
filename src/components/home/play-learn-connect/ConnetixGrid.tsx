import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';

interface ConnetixGridProps {
    videoSrc: string;
    images: string[]; // Must be exactly 2 images for current layout
    className?:string
}

const ConnetixGrid: React.FC<ConnetixGridProps> = ({ videoSrc, images ,className}) => {
    return (
        <div className={clsx("grid grid-flow-col grid-rows-3 gap-6 md:gap-2 max-w-[748px] m-auto lg:justify-between justify-center h-full", className)}>
            <video
                src={videoSrc}
                controls
                muted
                loop
                playsInline
                autoPlay
                className="md:w-[389px] md:max-h-[705px] w-[173px] h-[365px] min-h-full row-span-3 object-cover rounded-xl"
            />

            <div className="grid row-span-3 gap-y-6">
                {images?.slice(0, 2).map((src, idx) => (
                    <Image
                        key={idx}
                        width={331}
                        height={337}
                        src={src}
                        className="md:w-[331px] md:max-h-[337px] w-[173px] max-h-[173px] min-h-full col-span-2 object-cover rounded-xl"
                        alt={`connetix-image-${idx}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ConnetixGrid;
