import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import clsx from "clsx";
import { Button } from "@/components/ui/button";

interface RangeCardProps {
  image: StaticImageData|string;
  imageStyle?:string,
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
  imageStyle,
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
        <div className=" flex items-center justify-center md:w-[490px] md:h-[428px]  w-[289px] h-[283px] z-10 group-hover:scale-105 transition-transform duration-500">
          <Image
            src={image}
            alt={title}
            width={490}
            height={428}
            className={clsx("object-contain relative  md:w-[400px] md:h-[428px]  w-[289px] h-[283px] transform transition-transform duration-500", imageStyle)}
            
          />
        </div>
        <p className="text-[28px]/[30px] font-[600] text-navy mt-6 z-10 tracking-[-0.25px]">
          {title}
        </p>
        <p className="text-[16px]/[22px] text-center text-gray-600 mt-2 z-10 w-fit max-w-[418px] font-[300]">{description}</p>
        <Button
          className={clsx(
            "mt-6 font-semibold py-2 px-4 rounded-full transition-colors z-10 w-[200px]",
            buttonColor,
            buttonHoverColor,
            buttonTextColor,
            
          )}
        >
          {buttonLabel}
        </Button>
      </div>
    </div>
  );
};

export default RangeCard;
