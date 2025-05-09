'use client'

import React, { JSX, useState } from 'react'
import { cn } from '@/lib/utils'
import Image, { StaticImageData } from 'next/image'

interface CarouselProps {
  items: JSX.Element[]
  buttonColors: string[]
  buttonBorderColors: string[]
  itemImages: string[] | StaticImageData[]
}

export default function Carousel({
  items,
  itemImages,
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
  const getItemImage = (offset: number): string | StaticImageData => {
    const index = (activeIndex + offset + total) % total
    return itemImages[index]
  }
  return (
    <div >
      <div className=" w-full   overflow-hidden">
        <div className=" w-full flex items-center justify-center">
          <div className=" flex w-full max-w-full overflow-hidden">
            <div className="  md:h-[878px] my-4  flex w-full  transition-transform duration-500 ease-in-out transform">
              {/* Previous (Peek) */}
              <div className="hidden xl:block w-[10%]  ">
                <div className="h-[851px]  rounded-lg overflow-hidden">

                  <Image
                    src={getItemImage(-1)}
                    alt={'title'}
                    className="object-cover w-full h-full"
                    priority
                  />
                  {/* {getItem(-1)} */}
                </div>
              </div>

              {/* Active */}
              <div className="relative w-full md:h-[851px]  xl:w-[80%] px-4 ">
                {/* Navigation Dots */}
                <div className="absolute flex justify-center space-x-2 -bottom-2 left-33 md:left-1  md:px-10">
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
              <div className="hidden xl:block w-[10%]  ">
                <div className="h-[851px] rounded-lg  overflow-hidden ">
                  <div className='relative'>
                    <div className='absolute'>
                      {getItem(1)}
                    </div>

                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
