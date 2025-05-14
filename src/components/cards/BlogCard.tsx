import Image, { StaticImageData } from "next/image";
import { FC } from "react";

type BlogCardProps = {
  title: string;
  category: string;
  date: string;
  imageUrl: string | StaticImageData;
  author: string;
};

const BlogCard: FC<BlogCardProps> = ({
  title,
  category,
  date,
  imageUrl,
  author,
}) => {
  return (
    <div className="flex flex-col w-[362px] h-[442px] md:w-[496px] md:h-[590px] p-0 gap-5   md:left-5 md:top-5">
      <div className=" w-full h-[283px] md:h-[388px] rounded-lg overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-2 px-2">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span className="bg-pink text-navy px-2 py-1 rounded-full">
            {category}
          </span>
          <span>{date}</span>
        </div>
        <h2 className="md:text-lg text-xl font-bold text-navy">{title}</h2>
        <p className="text-sm text-gray-500">
          Written by <span className="font-semibold">{author}</span>
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
