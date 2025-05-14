import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import clsx from "clsx";
import { Button } from "@/components/ui/button";

interface RangeCardProps {
  image: StaticImageData;
  title: string;
  description: string;
  buttonLabel: string;
  diamondColor: string; // Tailwind class e.g., "bg-purple-100"
  diamondHoverColor: string; // Tailwind hover class e.g., "group-hover:bg-purple-900"
  buttonColor: string; // Tailwind class e.g., "bg-purple-300"
  buttonHoverColor: string; // Tailwind hover class e.g., "group-hover:bg-purple-400"
  buttonTextColor?: string; // Optional text color e.g., "text-purple-900"
}

const RangeCard: FC<RangeCardProps> = ({
  image,
  title,
  description,
  buttonLabel,
  diamondColor,
  diamondHoverColor,
  buttonColor,
  buttonHoverColor,
  buttonTextColor = "text-white",
}) => {
  return (
    <div className="w-[289px] md:w-[490px]">
      <div className="flex flex-col items-center text-center  mx-auto group relative">
        <div
          className={clsx(
            "absolute top-16 left-1/2 -translate-x-1/2 md:w-[278.6px] md:h-[278.6px]  w-[183.49px] h-[183.49px] rotate-45 z-0 transition-all duration-500",
            diamondColor,
            "group-hover:-rotate-45", // Add a hover effect on diamond rotation
            diamondHoverColor
          )}
        />
        <div className="relative top-5 md:top-0 md:w-[490px] md:h-[428px]  w-[289px] h-[283px] z-10 group-hover:scale-105 transition-transform duration-500">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain transform transition-transform duration-500"
          />
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 z-10">
          {title}
        </h2>
        <p className="text-sm text-gray-600 mt-2 z-10 md:max-w-96 max-w-72">{description}</p>
        <Button
          className={clsx(
            "mt-6 font-semibold py-2 px-4 rounded-full transition-colors z-10",
            buttonColor,
            buttonHoverColor,
            buttonTextColor,
            "group-hover:bg-opacity-90"
          )}
        >
          {buttonLabel}
        </Button>
      </div>
    </div>
  );
};

export default RangeCard;
