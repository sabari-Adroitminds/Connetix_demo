import Image from "next/image";
import rocket from "../../../../../public/images/_Шар_1.png"; // Adjust the path as necessary
export default function EducationDiscountCard() {
    return (
        <div className="flex flex-col items-start w-[342px] h-[74px] rounded-[10px]">
            <p className="text-custom-gray text-[14px] ">Want to add this to your classroom?</p>
            <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg px-6 py-4 w-full relative">
                <div>
                    <p className="text-[12px] text-blue font-[350] not-[]:font-medium">Apply for our education discount</p>
                    <p className="text-[17px] font-[350] text-gray-900">Register your interest today</p>
                </div>
                <div className="ml-4">
                    <Image
                        src={rocket}
                        alt="Colorful Rocket "
                        className="absolute -top-4 -right-4"
                        width={60}
                        height={60}
                    />
                </div>
            </div>
        </div>
    );
}
