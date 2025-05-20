import { FC } from "react";
import Robot from "./Robot";
import IconFundamental from "../icons/educationalToy/IconFundamental";
import IconLearnSteam from "../icons/educationalToy/IconLearnSteam";
import IconCreativity from "../icons/educationalToy/IconCreativity";
import IconMesh from "../icons/educationalToy/IconMesh";
import Graphic from "./Graphic";
import Image from "next/image";
import clsx from "clsx";
// import { Carousel, CarouselContent, CarouselItem, CarouselScrollbar } from "./carousel/CardSlider";

const features = [
  {
    id: 1,
    icon: IconLearnSteam,
    title: "Learn STEAM Concepts",
    description: "Explore engineering, gravity, shape, colour & design, plus much more"
  },
  {
    id: 2,
    icon: IconCreativity,
    title: "Encourage Creativity",
    description: "Imagination and learning through play"
  },
  {
    id: 3,
    icon: IconMesh,
    title: "MESH Products",
    description: "Promoting essential life skills with Mental, Emotional and Social Health"
  },
  {
    id: 4,
    icon: IconFundamental,
    title: "Fundamental skills",
    description: "Children's resilience and wellbeing at the forefront"
  }
];

const EducationalToy: FC = () => {
  return (
    <div className="relative bg-primary-very-light h-fit lg:h-[700px] rounded-[70px] flex flex-wrap lg:flex-nowrap items-center justify-center px-[21px] py-[71px] lg:p-[70px]">
      <div className="absolute top-0 right-0 rotate-180 hidden lg:block">
        <Graphic />
      </div>

      <div className="w-full absolute bottom-0 left-0 overflow-hidden">
        <Graphic />
      </div>
      
      <div className="overflow-hidden z-20 max-w-[670px]">
        <h1 className="font-bold text-[32px] lg:text-[50px] text-navy">
          The educational toy bringing imagination to life!
        </h1>

        <div className="flex lg:grid lg:grid-cols-2 lg:grid-rows-2 overflow-x-auto lg:overflow-hidden gap-10 mt-10 pb-4 lg:pb-0">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.id} className="flex flex-col  gap-[10px] lg:gap-4 w-fit lg:min-w-[300px] max-w-[175px] lg:max-w-[300px] flex-shrink-0">
                <div className="flex flex-col lg:flex-row lg:items-center gap-[10px] lg:gap-4">
                  <Icon />
                  <span className="font-medium text-base lg:text-xl text-navy leading-6">
                    {feature.title}
                  </span>
                </div>
                <p className="text-sm lg:text-base text-navy opacity-80">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
        {/* <Carousel className=" lg:hidden p-4">
        <CarouselContent className="flex gap-10 mt-10 pb-4">
          {features.map((slide) =>{
            const Icon = slide.icon;
          
          return (
            <div key={slide.id} className="flex flex-col gap-4 w-[175px] ">
                <div className="flex flex-col items-center gap-4">
                  <Icon />
                  <span className="font-medium text-base text-navy leading-6">
                    {slide.title}
                  </span>
                </div>
                <p className="text-sm text-navy opacity-80">
                  {slide.description}
                </p>
              </div>
          )})}
        </CarouselContent>
        <CarouselScrollbar className="p-0" />
      </Carousel>  */}
      </div>
      
      <Robot />
      <Image 
        className="absolute -bottom-12 left-20 rotate-45" 
        src="/images/tiles/pink.png" 
        width={73} 
        height={63} 
        alt="pink-tile"
      />
    </div>
  );
};

export default EducationalToy;