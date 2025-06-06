import Image, { StaticImageData } from 'next/image';
import { Button } from '@/components/ui/button';
import { FC } from 'react';
import IconHeart from '@/components/icons/IconHeart';
import clsx from 'clsx';

type ProductCardProps = {
  title: string;
  price: string;
  imageUrl: string | StaticImageData;
  isNew?: boolean;
  reviews: number;
  isFavorite?: boolean;
};

const ProductCard: FC<ProductCardProps> = ({ title, price, imageUrl, isNew = true, reviews, isFavorite=false }) => {
  return (
    <div className=" w-[176px] md:max-w-[496px] md:w-full  rounded-xl pb-2  text-center flex flex-col items-center  justify-center relative bg-white">

      <div className=" relative w-[176px] md:w-full md:max-w-[496px] h-[149px] md:max-h-[428px] md:h-full border border-off-white rounded-xl flex justify-center mb-4">
        <div className="absolute top-3 left-3 md:top-4 md:left-4 flex items-center gap-2">
        {isNew && (
          <span className="  h-[20px] md:w-[48px] md:h-[23px] bg-green text-white text-[10px] md:text-[12px] font-semibold px-2 py-1 rounded-full">
            NEW
          </span>
        )}
          <IconHeart className={clsx(isFavorite?'fill-red-600/80':'',
            'w-[12px] h-[12px] md:w-[16px] md:h-[16px] cursor-pointer text-gray-500 hover:text-red-600 transition-colors duration-200'
          )} />
        </div>
        <Image width={450} height={450} src={imageUrl} alt={title} className="rounded-lg object-fill" />
      </div>
      <p className="text-lg font-medium text-navy">{title}</p>
      <p className="text-navy font-[200] md:font-[500] text-sm md:text-[16px] mt-1">{price}</p>
      <div className="md:flex hidden  items-center justify-center mt-1 text-[#FFC32B] text-sm">
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
        <Button className='min-w-[150px]  h-[45px] md:bg-white/80 md:hover:bg-white bg-navy/10 hover:bg-navy'>
        Add to cart
        </Button>
      
      </div>
    </div>
  );
}

export default ProductCard;