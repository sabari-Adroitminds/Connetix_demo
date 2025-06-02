"use client";
import clsx from "clsx";
import Image from "next/image";
import { FC } from "react";
import { motion } from "motion/react";

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
    <motion.div className="flex flex-col gap-[60px]">
      <h3 className="text-xl font-medium text-navy text-center">
        Award Winning
      </h3>
      <motion.div
        className="overflow-x-auto hide-scrollbar"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: {},
        }}
      >
        <div className="flex items-center justify-between gap-8 md:gap-20 px-4">
          {Images.map((image, index) => (
        <motion.div
          className="flex-shrink-0 min-w-[60px] min-h-[60px] w-[60px] h-[60px] md:min-w-[120px] md:min-h-[120px] md:w-[120px] md:h-[120px] flex items-center justify-center"
          key={index}
          variants={{
            hidden: { x: 300, opacity: 0 },
            visible: { x: 0, opacity: 1 },
          }}
          transition={{ duration: 1, delay: index * 0.1 }}
        >
          <Image
            className={clsx(
          "w-full h-full object-contain grayscale opacity-55",
          [2, 3, 4].includes(index) && "!opacity-100"
            )}
            src={image}
            width={120}
            height={120}
            alt={`Image ${index}`}
          />
        </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AwardWinning;
