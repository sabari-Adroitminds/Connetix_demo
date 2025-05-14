"use client";

import React, {
  FC,
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

interface SliderProps extends PropsWithChildren {
  buttonColors: string[];
  buttonBorderColors: string[];
  autoPlayInterval?: number;
}

const Slider: FC<SliderProps> = ({
  children,
  buttonColors,
  buttonBorderColors,
  autoPlayInterval = 2000,
}) => {
  const autoplayRef = useRef(
    Autoplay({ delay: autoPlayInterval, stopOnInteraction: false })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [autoplayRef.current]
  );

  const [activeIndex, setActiveIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setActiveIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  const handleMouseEnter = () => {
    autoplayRef.current.stop();
  };

  const handleMouseLeave = () => {
    autoplayRef.current.play();
  };

  return (
    <div
      className="w-full relative my-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Carousel Viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">{children}</div>
      </div>

      {/* Navigation Dots */}
      <div className="mt-4 flex justify-center ">
        <div className="absolute bottom-2 lg:left-75 md:left-50 transform flex items-center">
          {buttonBorderColors.map((_, index) => (
            <button
              key={`navigation-dot-${index}`}
              onClick={() => scrollTo(index)}
              className={cn(
                "w-[18px] h-[18px] rounded-[3px] rotate-45 mx-2 transition-all duration-300 cursor-pointer",
                buttonColors[index] || "",
                activeIndex === index ? buttonBorderColors[index] || "" : ""
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
