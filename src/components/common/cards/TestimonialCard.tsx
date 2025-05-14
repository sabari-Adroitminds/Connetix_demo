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
    <div className=" w-[488px] h-[365px] left-[505px] bottom-0 bg-[#71C6BF] rounded-[12px] p-6 text-white flex flex-col justify-between">
      <div>
        <div className="text-3xl mb-4">❝</div>
        <p className="text-white text-base leading-relaxed">{review}</p>
      </div>
      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-[#569F98] flex items-center justify-center text-white font-semibold">
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
