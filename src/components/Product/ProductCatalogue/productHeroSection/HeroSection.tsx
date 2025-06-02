import Image from "next/image";
import React from "react";

interface HeroSectionProps {
    title: string;
    description: string;
    imageUrl: string;
    imageAlt?: string;
    bgColor?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
    title,
    description,
    imageUrl,
    imageAlt = "Promo Image",
    bgColor = 'bg-yellow-tint'
}) => {
    return (
        <div className="flex   justify-center max-w-full max-h-[70vh] rounded-2xl p-0 ">
            {/* Left Section */}
            <div className={" flex basis-2/2 md:basis-1/2 xl:basis-1/3 items-center justify-center rounded-2xl  md:rounded-r-[0px] " + `${bgColor}`}>
                <div className="max-w-[461px] mx-auto p-6 flex flex-col justify-center">
                    <p className="text-[70px]/[70px]  text-navy mb-4">{title}</p>
                    <p className="text-[16px] text-navy/80 mb-4">{description}</p>

                </div>
            </div>
            {/* Right Section */}
            <div className=" xl:basis-2/3 basis-1/2  md:block hidden   h-full">
                <Image
                    width={1000}
                    height={1000}
                    src={imageUrl}
                    alt={imageAlt}
                    className="object-cover  w-full lg:h-[851px] md:h-[500px] max-h-[70vh] h-[380px] rounded-r-2xl "
                    priority
                />
            </div>
        </div>
    );
};

export default HeroSection;
