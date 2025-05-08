'use client'

import Image, { StaticImageData } from 'next/image'
import clsx from 'clsx'

interface HeroSliderProps {
  title: string
  subtitle?: string
  description: string
  buttonText: string
  bgColorClass?: string
  titleColorClass?: string
  subtitleColorClass?: string
  descriptionColorClass?: string
  buttonColorClass?: string
  buttonHoverColorClass?: string
  image: StaticImageData
}

export default function HeroSlider({
  title,
  subtitle,
  description,
  buttonText,
  bgColorClass = 'bg-primary-light',
  titleColorClass = 'text-navy',
  subtitleColorClass = 'text-primary',
  descriptionColorClass = 'text-navy',
  buttonColorClass = 'bg-primary',
  buttonHoverColorClass = 'hover:bg-primary-tint',
  image
}: HeroSliderProps) {
  return (
    <div className={clsx(bgColorClass, 'w-full')}>
      <div className="flex flex-col md:flex-row items-center justify-around md:justify-between ">
        {/* Text Section */}
        <div className="min-w-[421px] px-20 flex flex-col items-start justify-center gap-6 md:text-left mb-8 md:mb-0">
          {subtitle && (
            <p className={clsx('text-sm font-medium hidden md:block', subtitleColorClass)}>
              {subtitle}
            </p>
          )}
          <h2 className={clsx('text-3xl md:text-5xl font-bold', titleColorClass)}>
            {title}
          </h2>
          <p className={clsx('text-base md:text-lg max-w-md', descriptionColorClass)}>
            {description}
          </p>
          <button
            className={clsx(
              'text-white px-6 py-3 rounded-full font-semibold transition-colors',
              buttonColorClass,
              buttonHoverColorClass
            )}
          >
            {buttonText}
          </button>
        </div>

        {/* Image Section */}
        <div className="w-[1058px] h-[851px] hidden md:block">
          <Image
            src={image}
            alt={title}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>
    </div>
  )
}
