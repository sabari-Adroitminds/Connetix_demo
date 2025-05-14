// types.ts
import { ComponentPropsWithoutRef } from 'react';
import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react';

export type CarouselApi = UseEmblaCarouselType[1];
export type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
export type CarouselOptions = UseCarouselParameters[0];
export type CarouselPlugin = UseCarouselParameters[1];

export interface CarouselProps extends ComponentPropsWithoutRef<'div'> {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  setApi?: (api: CarouselApi) => void;
  carouselScrollbarLabel?: string;
  hideOverflow?: boolean;
}

export interface CarouselContextProps extends CarouselProps {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
}

export interface CarouselButtonsProps extends ComponentPropsWithoutRef<'div'> {
  colorScheme?: 'light' | 'dark';
  previousLabel?: string;
  nextLabel?: string;
}

export interface CarouselScrollbarProps extends ComponentPropsWithoutRef<'div'> {
  colorScheme?: 'light' | 'dark';
  previousLabel?: string;
  nextLabel?: string;
  label?: string;
  buttonColors?: string;
  scrollbarColors?: string;
}