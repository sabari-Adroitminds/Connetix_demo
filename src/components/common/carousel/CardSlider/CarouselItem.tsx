'use client';

import { clsx } from 'clsx';
import { FC, ComponentPropsWithoutRef } from 'react';

const CarouselItem: FC<ComponentPropsWithoutRef<'div'>> = ({ className, ...props }) => {
  return (
    <div
      {...props}
      aria-roledescription="slide"
      className={clsx('min-w-0 shrink-0 grow-0 pl-4 @2xl:pl-5', className)}
      role="group"
    />
  );
};

export default CarouselItem;