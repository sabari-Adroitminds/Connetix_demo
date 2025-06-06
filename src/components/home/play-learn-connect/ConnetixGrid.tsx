import React from 'react'
import Image from 'next/image'
import clsx from 'clsx'

interface ConnetixGridProps {
    videoSrc: string
    images: string[] // Expecting exactly 2 images
    className?: string
}

const ConnetixGrid: React.FC<ConnetixGridProps> = ({ videoSrc, images, className }) => {
    return (
        <div
            className={clsx(
                'grid grid-flow-col grid-rows-3 gap-6 md:gap-4 max-w-[748px] m-auto justify-center lg:justify-between h-full',
                className
            )}
        >
            <video
                src={videoSrc}
                controls
                muted
                loop
                playsInline
                autoPlay
                className="object-cover rounded-xl row-span-3 w-[173px] h-[365px] md:w-[389px] md:max-h-[705px] min-h-full"
            />

            <div className="grid row-span-3 gap-y-6">
                {images.slice(0, 2).map((src, index) => (
                    <Image
                        key={index}
                        width={331}
                        height={337}
                        src={src}
                        alt={`connetix-image-${index}`}
                        className="object-cover rounded-xl col-span-2 w-[173px] max-h-[173px] min-h-full md:w-[331px] md:max-h-[337px]"
                    />
                ))}
            </div>
        </div>
    )
}

export default ConnetixGrid
