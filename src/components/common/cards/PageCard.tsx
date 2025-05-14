"use client";

import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import { Button } from "@/components/ui/button";

interface PageCardProps {
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string | StaticImageData;
  onClick?: () => void;
  className?: string;
}

const PageCard: FC<PageCardProps> = ({
  title,
  description,
  buttonText,
  imageUrl,
  onClick,
  className = "",
}) => {
  return (
    <div
      className={`bg-white rounded-xl w-[496px] flex flex-col items-start gap-2 ${className}`}
    >
      <div className="md:w-[496px] md:h-[385px] w-[362px] h-[278px] relative rounded-xl overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="flex flex-col gap-2 p-4">
        <h3 className="text-lg font-medium text-[#27344F]">{title}</h3>
        <p className="text-[16px] text-[#27344FCC] leading-5">{description}</p>
        <Button
          onClick={onClick}
          className="w-[212px] min-w-[150px] h-[50px] mt-2"
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default PageCard;
