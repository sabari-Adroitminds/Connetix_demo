

import Image, { StaticImageData } from 'next/image'
import clsx from 'clsx'
import { Button } from '@/components/ui/button'

interface HeroSliderProps {
  title: string
  subtitle?: string
  description: string
  descriptionForSmallScreens: string
  buttonText: string
  bgColorClass?: string
  titleColorClass?: string
  subtitleColorClass?: string
  descriptionColorClass?: string
  buttonColorClass: 'default' | 'primary' | 'primaryTint' | 'primaryLight' | 'secondary' | 'secondaryTint' | 'secondaryLight' | 'blue' | 'blueTint' | 'blueLight' | 'teal' | 'tealTint' | 'tealLight' | 'yellow' | 'yellowTint' | 'yellowLight' | 'pink' | 'pinkTint' | 'pinkLight' | 'watermelon' | 'watermelonTint' | 'watermelonLight' | 'charcoal' | 'charcoalTint' | 'charcoalLight' | 'destructive'
  buttonHoverColorClass?: string
  image: StaticImageData
}

export default function HeroSlider({
  title,
  subtitle,
  description,
    descriptionForSmallScreens,
  buttonText,
  bgColorClass = 'bg-primary-light',
  titleColorClass = 'text-navy',
  subtitleColorClass = 'text-primary',
  descriptionColorClass = 'text-navy',
  buttonColorClass = 'primary',

  image
}: HeroSliderProps) {
  return (
    <div className={clsx(bgColorClass, 'w-full rounded-xl')}>
      <div className="flex flex-col-reverse md:flex-row items-center justify-around md:justify-between ">
        {/* Text Section */}
        <div  className="flex flex-12/12 md:flex-4/12 items-center justify-center   md:w-[100%] w-[366px]  h-[273px] p-[30px] align-center ">
        <div className="w-[421px] flex flex-col items-center md:items-start justify-center gap-6 md:text-left mb-8 md:mb-0">
          {subtitle && (
            <p className={clsx('text-sm font-medium hidden md:block', subtitleColorClass)}>
              {subtitle}
            </p>
          )}
          <h2 className={clsx('text=[32px]/[40px] md:text-[70px]/[75px] l font-[300px]', titleColorClass)}>
            {title} 
          </h2>
          <p className={clsx('text-[14px]  md:text-lg  hidden md:block', descriptionColorClass)}>
            {description}
          </p>
           <p className={clsx('text-[14px]  md:text-lg text-center  md:hidden block', descriptionColorClass)}>
            {descriptionForSmallScreens}
          </p>
          <Button
          variant={buttonColorClass}
            className={clsx(
         
              ' h-[50px]'
            )}
          >
            {buttonText}
          </Button>
        </div>
        </div>

        {/* Image Section */}
        <div className=" flex-8/12 md:w-[1058px] md:h-[851px]  w-[366px] h-[380px] rounded-xl ">
          <Image
            src={image}
            alt={title}
            className="object-cover md:w-full md:h-full w-[366px] h-[380px] rounded-r-xl "
            priority
          />
        </div>
      </div>
    </div>
  )
}
