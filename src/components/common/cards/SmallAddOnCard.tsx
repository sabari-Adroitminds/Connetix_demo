import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import { FC } from "react";

interface AddOnCardProps {
  imageSrc: string | StaticImageData;
  title: string;
  quantity: string;
  price: string;
}

const AddOnCard: FC<AddOnCardProps> = ({
  imageSrc,
  title,
  quantity,
  price,
}) => {
  return (
    <div className="flex items-center justify-between border border-[#F0ECF3] rounded-xl p-4 w-full max-w-md bg-white shadow-sm">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 relative">
          <Image
            src={imageSrc}
            alt={title}
            layout="fill"
            objectFit="contain"
            className="rounded-md"
          />
        </div>
        <div>
          <p className="text-base font-semibold text-navy">{title}</p>
          <p className="text-[14px]   text-navy">{quantity}</p>
        </div>
      </div>
      <Button className="">
        <span className="text-indigo-500 text-lg">+</span>
        <span>${price}</span>
      </Button>
    </div>
  );
};

export default AddOnCard;
