'use client';

import { clsx } from 'clsx';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { FC } from 'react';
import { CarouselButtonsProps } from './types';
import { useCarousel } from './Context';

const CarouselButtons: FC<CarouselButtonsProps> = ({
  className,
  colorScheme = 'light',
  previousLabel = 'Previous',
  nextLabel = 'Next',
  ...props
}) => {
  const { scrollPrev, scrollNext, canScrollPrev, canScrollNext } = useCarousel();

  return (
    <div
      {...props}
      className={clsx(
        'flex gap-2 cursor-pointer',
        {
          light: 'text-[var(--carousel-light-button,hsl(var(--foreground)))]',
          dark: 'text-[var(--carousel-dark-button,hsl(var(--background)))]',
        }[colorScheme],
        className,
      )}
    >
      <button
        className="rounded-lg cursor-pointer ring-[var(--carousel-focus,hsl(var(--primary)))] transition-colors duration-300 focus-visible:outline-0 focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-25"
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        title={previousLabel}
        type="button"
        aria-label={previousLabel}

      >
        <ArrowLeft className="h-6 w-6" strokeWidth={1.5} />
      </button>
      <button
        className="rounded-lg cursor-pointer ring-[var(--carousel-focus,hsl(var(--primary)))] transition-colors duration-300 focus-visible:outline-0 focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-25"
        disabled={!canScrollNext}
        onClick={scrollNext}
        title={nextLabel}
        type="button"
        aria-label={nextLabel}
      >
        <ArrowRight className="h-6 w-6" strokeWidth={1.5} />
      </button>
    </div>
  );
};

export default CarouselButtons;