"use client";
import React, { useEffect, useRef, useState } from 'react';
import IconGalleryButton from '@/components/icons/IconControlButton';
import IconMagnet from '@/components/icons/whyConnetix/IconMagnet';
import IconBevel from '@/components/icons/whyConnetix/IconBevel';
import IconSafe from '@/components/icons/whyConnetix/IconSafe';
import IconRivets from '@/components/icons/whyConnetix/IconRivets';

const CardSlider = () => {
    const cardRef = useRef<HTMLDivElement>(null);
  
      const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      if (cardRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = cardRef.current;
        const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
        setScrollProgress(Math.min(progress, 100));
      }
    };
  
    const container = cardRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const features = [
    {
      icon: <IconMagnet />,
      title: "Strong Magnets",
      description: "Exceptionally strong magnets, ensuring a more secure hold compared to other tiles.",
    },
    {
      icon: <IconRivets />,
      title: "Rivets for safety",
      description: "Ultrasonic welding and metal rivets to make magnetic tile play safer for little hands.",
    },

    {
      icon: <IconBevel />,
      title: "Unique Bevel Design",
      description: "Provides added durability and clearer tiles for beautiful light refractions.",
    },
    {
      icon: <IconSafe />,
      title: "Safe for 3+",
      description: "Made from non-toxic ABS plastic that is BPA, lead and Phthalate free.",
    }
  ];

  return (
    <div className="block lg:hidden max-w-4xl mx-auto p-6">
      <div className="relative overflow-hidden">
        <div ref={cardRef} className="hide-scrollbar flex lg:grid lg:grid-cols-2 lg:grid-rows-2 overflow-x-auto lg:overflow-hidden gap-10 mt-10 pb-4 lg:pb-0">

          {features.map((feature, index) => (
            <div
                key={index}
                className="flex flex-col gap-[10px] lg:gap-4 w-fit lg:min-w-[300px] max-w-[175px] lg:max-w-[300px] flex-shrink-0"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-[10px] lg:gap-4">
                  {feature.icon}
                  <span className="font-medium text-base lg:text-xl text-navy leading-6">
                    {feature.title}
                  </span>
                </div>
                <p className="text-sm lg:text-base text-navy opacity-80">
                  {feature.description}
                </p>
              </div>
          ))}
        </div>
        
        
        {/* Navigation with scroll bar */}
        <div className="flex lg:hidden justify-between items-center mt-6 lg:mt-10">
          {/* <button
           onClick={() => cardRef.current?.scrollBy({ left: -200, behavior: "smooth" })}
            className="cursor-pointer "
          >
            <IconGalleryButton color={"var(--primary, #a855f7)"} />
          </button> */}

            <div className="flex-1 mx-4">
            <div className="w-full bg-purple-300 h-[1px] relative overflow-visible">
              <div 
              className="bg-purple-600 h-[1px]"
              style={{
                width: `${scrollProgress}%`,
                transition: "width 0.5s cubic-bezier(0.4,0,0.2,1)"
              }}
              ></div>
              <div
              className="absolute top-0 w-4 h-[1px] bg-purple-600 flex items-center justify-center"
              style={{
                left: `calc(${scrollProgress}% - 8px)`,
                transition: "left 0.5s cubic-bezier(0.4,0,0.2,1)"
              }}
              >
              <div className="w-0 h-[1px] border-l-2 border-r-2 border-t-2 border-transparent border-t-purple-600 transform rotate-90"></div>
              </div>
            </div>
            </div>

          <button
            onClick={() => cardRef.current?.scrollBy({ left: 200, behavior: "smooth" })}
            className="cursor-pointer rotate-180"
          >
            <IconGalleryButton tintedButton={true} color={"var(--primary, #a855f7)"} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardSlider;