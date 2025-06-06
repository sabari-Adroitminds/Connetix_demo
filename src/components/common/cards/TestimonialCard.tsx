import { FC } from "react";

interface TestimonialCardProps {
  name: string;
  location: string;
  review: string;
  rating: number;
}

const TestimonialCard: FC<TestimonialCardProps> = ({
  name,
  location,
  review,
  rating,
}) => {
  return (
    <div className=" md:w-[488px] md:h-[365px] w-[360px] h-[365px] left-[353px] bottom-0 bg-[#71C6BF] rounded-[12px] p-6 text-white flex flex-col justify-between">
      <div >
       
        <p className="text-white font-[500] text-[18px] md:text-[20px] leading-[28px]">  <span className="relative top-3 text-[#3E928B] text-[35px] pr-4">❝</span> {review}</p>
      </div>
      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-[#3E928B] flex items-center justify-center text-white font-semibold">
            {name.charAt(0)}
          </div>
          <div>
            <p className="text-white font-medium">{name}</p>
            <p className="text-white text-sm">{location}</p>
          </div>
        </div>
        <div className="flex space-x-1">
          {Array.from({ length: 5 }, (_, i) => (
            <span
              key={i}
              className={`text-white ${
                i < rating ? "opacity-100" : "opacity-30"
              }`}
            >
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
