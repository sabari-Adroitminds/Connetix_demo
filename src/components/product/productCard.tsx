import Image, { StaticImageData } from 'next/image';

type ProductCardProps = {
  title: string;
  price: string;
  imageUrl: string| StaticImageData;
  isNew?: boolean;
  reviews: number;
};

export default function ProductCard({ title, price, imageUrl, isNew = false, reviews }: ProductCardProps) {
  return (
    <div className=" w-[496px]  rounded-xl pb-2  text-center relative bg-white">
    
      <div className="w-[496px] h-[428px] border border-off-white rounded-xl flex justify-center mb-4">
          {isNew && (
        <span className="absolute top-8 left-8 bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
          NEW
        </span>
      )}
        <Image src={imageUrl} alt={title}  className="rounded-lg object-contain" />
      </div>
      <h2 className="text-lg font-medium">{title}</h2>
      <p className="text-gray-800 font-semibold mt-1">{price}</p>
      <div className="flex items-center justify-center mt-1 text-yellow-400 text-sm">
        {'★'.repeat(5)}
        <span className="text-gray-500 ml-2 text-xs">4.9 ({reviews} Reviews)</span>
      </div>
      <div className="mt-4 flex gap-2 justify-center">
        <button className="bg-gray-200 hover:bg-gray-300 text-sm px-4 py-1 rounded-full">
          Quick buy
        </button>
        <button className="bg-black text-white hover:bg-gray-800 text-sm px-4 py-1 rounded-full">
          View Product
        </button>
      </div>
    </div>
  );
}
