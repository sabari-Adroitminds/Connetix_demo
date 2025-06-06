import clsx from "clsx";
import Image from "next/image";
import React from "react";

interface HeroSectionProps {
    title: string;
    description: string;
    mobileDescription: string;
    imageUrl: string;
    imageClass?: string;
    imageAlt?: string;
    bgColor?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
    title,
    description,
    mobileDescription,
    imageUrl,
    imageClass,
    imageAlt = "Promo Image",
    bgColor = 'bg-yellow-tint'
}) => {
    return (
        <div className="flex   justify-center max-w-full max-h-[580px] rounded-2xl p-0 ">
            {/* Left Section */}
            <div className={" flex basis-2/2 lg:basis-1/2 xl:basis-1/3 items-center justify-center rounded-2xl lg:rounded-r-[0px] " + `${bgColor}`}>
                <div className="lg:max-w-[461px] max-w-full  mx-auto p-6 flex flex-col items-center justify-center">
                    <p className="lg:text-[60px]/[70px] text-[32px]/[40px]  text-navy mb-4">{title}</p>
                    <p className="hidden lg:block text-[16px]/[26px] lg:max-w-[445px] font-[300] text-navy/80 mb-4">{description}</p>
                    <p className="lg:hidden text-[16px]/[26px] lg:max-w-[445px] font-[300] text-navy/80 mb-4">{mobileDescription}</p>

                </div>
            </div>
            {/* Right Section */}
      
                <Image
                    width={1080}
                    height={720}
                    src={imageUrl}
                    alt={imageAlt}
                className={clsx("lg:block  hidden object-cover xl:basis-2/3 basis-1/2   h-full  w-full max-h-[580px]  rounded-r-2xl ", imageClass)}
                    priority
                />
          
        </div>
    );
};

export default HeroSection;
