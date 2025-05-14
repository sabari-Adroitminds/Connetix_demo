"use client";

import { clsx } from "clsx";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FC, useCallback, useEffect, useState } from "react";
import { CarouselScrollbarProps } from "./types";
import { useCarousel } from "./Context";

const CarouselScrollbar: FC<CarouselScrollbarProps> = ({
  className,
  colorScheme = "dark",
  previousLabel = "Previous",
  nextLabel = "Next",
  label = "Carousel scrollbar",
  buttonColors = "bg-white",
  scrollbarColors = "bg-primary",
  ...props
}) => {
  const { api, scrollPrev, scrollNext, canScrollPrev, canScrollNext } =
    useCarousel();
  const [progress, setProgress] = useState(0);
  const [scrollbarPosition, setScrollbarPosition] = useState({
    width: 0,
    left: 0,
  });

  const findClosestSnap = useCallback(
    (nextProgress: number) => {
      if (!api) return 0;

      const point = nextProgress / 100;
      const snapList = api.scrollSnapList();
      if (snapList.length === 0) return -1;

      const closestSnap = snapList.reduce((prev, curr) =>
        Math.abs(curr - point) < Math.abs(prev - point) ? curr : prev
      );

      return snapList.findIndex((snap) => snap === closestSnap);
    },
    [api]
  );

  useEffect(() => {
    if (!api) return;

    const snapList = api.scrollSnapList();
    const scrollbarWidth = 100 / snapList.length;
    const closestSnapIndex = findClosestSnap(progress);
    const scrollbarLeft = (closestSnapIndex / snapList.length) * 100;

    setScrollbarPosition({ width: scrollbarWidth, left: scrollbarLeft });
    api.scrollTo(closestSnapIndex);
  }, [progress, api, findClosestSnap]);

  useEffect(() => {
    if (!api) return;

    const onScroll = () => {
      setProgress(api.scrollSnapList()[api.selectedScrollSnap()]! * 100);
    };

    api.on("select", onScroll);
    api.on("scroll", onScroll);
    api.on("reInit", onScroll);

    return () => {
      api.off("select", onScroll);
      api.off("scroll", onScroll);
      api.off("reInit", onScroll);
    };
  }, [api]);

  return (
    <div
      {...props}
      className={clsx(
        "flex items-center gap-2 cursor-pointer h-[40px] m-12",
        {
          light: "text-[var(--carousel-light-button,hsl(var(--foreground)))]",
          dark: "text-[var(--carousel-dark-button,hsl(var(--background)))]",
        }[colorScheme],
        className
      )}
    >
      <button
        className={clsx(
          "cursor-pointer relative w-[40px] h-[40px] align-middle rotate-45 border-[1px] border-font rounded-[10%]",
          buttonColors
        )}
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        title={previousLabel}
        type="button"
        aria-label={previousLabel}
      >
        <div className="absolute left-2 top-0.5 w-full h-full -rotate-45">
          <ArrowLeft className="h-6 w-6 cursor-pointer" strokeWidth={1.5} />
        </div>
      </button>
      <div
        className={clsx(
          "relative flex h-6 flex-1 items-center overflow-hidden cursor-pointer",
          !canScrollPrev && !canScrollNext && "pointer-events-none invisible"
        )}
      >
        <input
          aria-label={label}
          aria-orientation="horizontal"
          aria-valuenow={progress}
          aria-valuetext={`${Math.round(progress)}%`}
          className="absolute h-full w-full cursor-pointer appearance-none bg-transparent opacity-0"
          max={100}
          min={0}
          onChange={(e) => setProgress(e.currentTarget.valueAsNumber)}
          type="range"
          value={progress}
        />
        <div
          className={clsx(
            "pointer-events-none absolute h-[1px] w-full rounded-full opacity-10",
            {
              light:
                "bg-[var(--carousel-light-scrollbar,hsl(var(--foreground)))]",
              dark: "bg-black",
            }[colorScheme]
          )}
        />
        <div
          className={clsx(
            "pointer-events-none absolute h-[2px] rounded-full transition-all ease-out",
            {
              light:
                "bg-[var(--carousel-light-scrollbar,hsl(var(--foreground)))]",
              dark: scrollbarColors,
            }[colorScheme]
          )}
          style={{
            width: `${scrollbarPosition.width}%`,
            left: `${scrollbarPosition.left}%`,
          }}
        />
      </div>
      <button
        className={clsx(
          "cursor-pointer relative w-[40px] h-[40px] align-middle rotate-45 border-[1px] border-font rounded-[10%]",
          buttonColors
        )}
        disabled={!canScrollNext}
        onClick={scrollNext}
        title={nextLabel}
        type="button"
        aria-label={nextLabel}
      >
        <div className="absolute right-2 top-2 -rotate-45">
          <ArrowRight className="h-6 w-6 cursor-pointer" strokeWidth={1.5} />
        </div>
      </button>
    </div>
  );
};

export default CarouselScrollbar;
