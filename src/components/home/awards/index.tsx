import clsx from "clsx";
import Image from "next/image";
import { FC } from "react";

// interface AwardWinningProps {}

const Images = [
  "/images/award/1.png",
  "/images/award/2.png",
  "/images/award/3.png",
  "/images/award/4.png",
  "/images/award/5.png",
  "/images/award/3.png",
  "/images/award/4.png",
  "/images/award/5.png",
];

const AwardWinning: FC = () => {
  return (
    <div className="flex flex-col gap-[60px]">
      <h3 className="text-xl font-medium text-navy text-center">
        Award Winning
      </h3>
      <div className="flex items-center justify-center gap-20 overflow-x-scroll">
        {Images.map((image, index) => (
          <Image
            className={clsx(
              "w-[60px] h-[60px] md:w-[120px] md:h-[120px] object-cover grayscale opacity-55",
              [2, 3, 4].includes(index) && "!opacity-100"
            )}
            key={index}
            src={image}
            width={120}
            height={120}
            alt={`Image ${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AwardWinning;
