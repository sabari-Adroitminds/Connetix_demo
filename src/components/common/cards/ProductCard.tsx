import Image, { StaticImageData } from 'next/image';
import { Button } from '@/components/ui/button';
import { FC } from 'react';

type ProductCardProps = {
  title: string;
  price: string;
  imageUrl: string | StaticImageData;
  isNew?: boolean;
  reviews: number;
};

const ProductCard: FC<ProductCardProps> = ({ title, price, imageUrl, isNew = false, reviews }) => {
  return (
    <div className=" w-[176px] md:w-[496px]  rounded-xl pb-2  text-center relative bg-white">

      <div className="w-[176px] md:w-[496px] h-[149px] md:h-[428px] border border-off-white rounded-xl flex justify-center mb-4">
        {isNew && (
          <span className="absolute top-2 left-2 md:top-4 md:left-4 bg-green text-white text-xs font-semibold px-2 py-1 rounded-full">
            NEW
          </span>
        )}
        <Image src={imageUrl} alt={title} className="rounded-lg object-contain" />
      </div>
      <h2 className="text-lg font-medium">{title}</h2>
      <p className="text-gray-800 font-semibold mt-1">{price}</p>
      <div className="flex items-center justify-center mt-1 text-[#FFC32B] text-sm">
        {'★'.repeat(5)}
        <span className="text-gray-500 ml-2 text-xs">4.9 ({reviews} Reviews)</span>
      </div>
      <div className="mt-4  gap-2 justify-center hidden  md:flex">
        <Button className='min-w-[150px]  h-[45px]'>
          Quick buy
        </Button>
        <Button className='min-w-[150px] h-[45px]'>
          View Product
        </Button>
      </div>
         <div className="mt-4 flex gap-2 justify-center   md:hidden">
        <Button className='min-w-[150px]  h-[45px]'>
        Add to cart
        </Button>
      
      </div>
    </div>
  );
}

export default ProductCard;