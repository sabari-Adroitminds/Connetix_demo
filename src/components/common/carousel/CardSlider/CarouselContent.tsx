'use client';

import { clsx } from 'clsx';
import { FC, ComponentPropsWithoutRef } from 'react';
import { useCarousel } from './Context';

const CarouselContent: FC<ComponentPropsWithoutRef<'div'>> = ({ className, ...props }) => {
  const { carouselRef } = useCarousel();

  return (
    <div className="w-full" ref={carouselRef}>
      <div {...props} className={clsx('-ml-4 flex @2xl:-ml-5', className)} />
    </div>
  );
};

export default CarouselContent;