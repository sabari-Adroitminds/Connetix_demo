'use client'

import React, { JSX, useState } from 'react'
import { cn } from '@/lib/utils'

interface CarouselProps {
  items: JSX.Element[]
  buttonColors: string[]
  buttonBorderColors: string[]
}

export default function Carousel({
  items,
  buttonColors,
  buttonBorderColors,
}: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const total = items.length

  const goTo = (index: number) => {
    setActiveIndex(index % total)
  }

//   const next = () => {
//     setActiveIndex((prev) => (prev + 1) % total)
//   }

//   const prev = () => {
//     setActiveIndex((prev - 1 + total) % total)
//   }

  const getItem = (offset: number): JSX.Element => {
    const index = (activeIndex + offset + total) % total
    return items[index]
  }

  return (
    <div >
    <div className=" w-full   overflow-hidden">
      <div className=" w-full flex items-center justify-center">
        <div className=" flex w-full max-w-full overflow-hidden">
          <div className="   h-[878px] my-4  flex w-full  transition-transform duration-500 ease-in-out transform">
            {/* Previous (Peek) */}
            <div className="hidden xl:block w-[10%]   opacity-60 px-2 my-2 py-4">
              <div className="h-[100%] rounded-lg overflow-hidden">
                {getItem(-1)}
              </div>
            </div>

            {/* Active */}
            <div className="relative w-full h-[851px]  xl:w-[80%] px-4 ">
              {/* Navigation Dots */}
              <div className="absolute flex justify-center space-x-2 -bottom-2  px-10">
                {items.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goTo(index)}
                    className={cn(
                      'w-[18px] h-[18px] rounded-[3px] rotate-45 mx-2',
                      buttonColors[index] || '',
                      activeIndex === index ? buttonBorderColors[index] || '' : ''
                    )}
                  />
                ))}
              </div>

              <div className=" rounded-lg shadow-lg overflow-hidden">
                {getItem(0)}
              </div>
            </div>

            {/* Next (Peek) */}
            <div className="hidden xl:block w-[10%] opacity-60 px-2 my-2 py-4">
              <div className="h-[100%] rounded-lg overflow-hidden">
                {getItem(1)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
  )
}
