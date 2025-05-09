'use client'; // Optional if using in app router (Next.js 13+)

import Image, { StaticImageData } from 'next/image';
import { Button } from '../ui/button';

interface PageCardProps {
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string | StaticImageData ;
}

export default function PageCard({
  title,
  description,
  buttonText,
  imageUrl,
}: PageCardProps) {
  return (
    <div className="bg-white rounded-xl  w-[496px]  flex flex-col items-start gap-2">
      {/* Image */}
      <div className="md:w-[496px] md:h-[385px] w-[362px] h-[278px] relative rounded-xl overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Title */}
      <h3 className="text-lg font-medium text-[#27344F]">{title}</h3>

      {/* Description */}
      <p className="text-[16px] text-[#27344FCC] leading-5">
        {description}
      </p>

      {/* Button */}
      <Button className='w-[212px] min-w-[150px] h-[50px]'>
  {buttonText}
      </Button>
      
    </div>
  );
}
