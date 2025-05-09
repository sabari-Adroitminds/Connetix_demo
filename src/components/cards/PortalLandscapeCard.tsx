import Image, { StaticImageData } from "next/image";
import { Button } from "../ui/button";

type PortalLandscapeCardProps = {
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string | StaticImageData;
};

const PortalLandscapeCard = ({
  title,
  description,
  buttonText,
  imageSrc,
}: PortalLandscapeCardProps) => {
  return (
    <div className="relative w-[602px] h-[198px] flex rounded-2xl border border-[#27344F26] bg-white overflow-hidden">
      <div className="absolute left-4 top-4 w-[220px] h-[170px] rounded-xl overflow-hidden ">
        <Image
          src={imageSrc}
          alt="Card Image"
          width={220}
          height={170}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="absolute left-[255px] top-[30px] flex flex-col gap-3 w-[331px] h-[140px]">
        <h2 className="text-[24px] leading-[24px] text-[#333] font-light">
          {title}
        </h2>
        <p className="text-[16px] leading-[26px] tracking-[-0.5px] text-[#27344FCC] font-light">
          {description}
        </p>
        <Button className=" px-[25px] py-[2px] w-[168px] h-[40px]">
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default PortalLandscapeCard;
