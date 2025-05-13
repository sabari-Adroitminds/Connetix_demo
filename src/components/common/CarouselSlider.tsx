'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { cn } from '@/lib/utils'

interface CarouselProps {
  children: React.ReactNode;
  buttonColors: string[]
  buttonBorderColors: string[]
  autoPlayInterval?: number
}

export default function CarouselSlider({
  children,
  buttonColors,
  buttonBorderColors,
  autoPlayInterval = 2000,
}: CarouselProps) {
  const autoplayRef = useRef(
    Autoplay({ delay: autoPlayInterval, stopOnInteraction: false })
  )

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center' },
    [autoplayRef.current]
  )

  const [activeIndex, setActiveIndex] = useState(0)

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setActiveIndex(emblaApi.selectedScrollSnap())
    }

    emblaApi.on('select', onSelect)
    onSelect()
  }, [emblaApi])

  const handleMouseEnter = () => {
    autoplayRef.current.stop()
  }

  const handleMouseLeave = () => {
    autoplayRef.current.play()
  }

  return (
    <div
      className="w-full relative my-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Carousel Viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {children}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className='mt-4 flex justify-center '>
        <div className="absolute bottom-2 lg:left-75 md:left-50 transform flex items-center">
          {buttonBorderColors.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                'w-[18px] h-[18px] rounded-[3px] rotate-45 mx-2 transition-all duration-300',
                buttonColors[index] || '',
                activeIndex === index ? buttonBorderColors[index] || '' : ''
              )}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export const CarouselSliderItem = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="embla__slide px-2 md:h-[851px] flex items-center justify-center rounded-lg">
      <div className="rounded-lg shadow-lg overflow-hidden">
        {children}
      </div>
    </div>
  )
}
