'use client';

import { clsx } from 'clsx';
import useEmblaCarousel from 'embla-carousel-react';
import { FC, KeyboardEvent, PropsWithChildren, useCallback, useEffect, useState } from 'react';
import { CarouselProps } from './types';
import { CarouselContext } from './Context';

const Carousel: FC<PropsWithChildren<CarouselProps>> = ({
  opts,
  setApi,
  plugins,
  className,
  children,
  hideOverflow = true,
  ...props
}) => {
  const [carouselRef, api] = useEmblaCarousel(opts, plugins);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  
  const onSelect = useCallback(() => {
    if (!api) return;

    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, [api]);

  const scrollPrev = useCallback(() => api?.scrollPrev(), [api]);
  const scrollNext = useCallback(() => api?.scrollNext(), [api]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext],
  );

  useEffect(() => {
    if (!api || !setApi) return;
    setApi(api);
  }, [api, setApi]);

  useEffect(() => {
    if (!api) return;

    onSelect();
    api.on('reInit', onSelect);
    api.on('select', onSelect);

    return () => {
      api.off('select', onSelect);
      api.off('reInit', onSelect);
    };
  }, [api, onSelect]);

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api,
        opts,
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        {...props}
        aria-roledescription="carousel"
        className={clsx('relative p-1.5 @container', hideOverflow && 'overflow-hidden', className)}
        onKeyDownCapture={handleKeyDown}
        role="region"
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
};

export default Carousel;