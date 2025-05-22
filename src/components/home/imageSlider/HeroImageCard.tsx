

import Image, { StaticImageData } from 'next/image'
import clsx from 'clsx'
import { Button } from '@/components/ui/button'
import PreTitle from '@/components/common/PreTitle'

interface HeroImageCardProps {
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

export default function HeroImageCard({
  title,
  subtitle,
  description,
  descriptionForSmallScreens,
  buttonText,
  bgColorClass = 'bg-primary-light',
  titleColorClass = 'text-navy',
  subtitleColorClass = 'text-primary',
  descriptionColorClass = 'text-navy/80',
  buttonColorClass = 'primary',

  image
}: HeroImageCardProps) {
  return (
    <div className={clsx(bgColorClass, '3xl:w-[1600px] 2xl:w-[1280px] xl:w-[1080px] lg:w-[980px] md:w-[600px] rounded-xl h-full')}>
      <div className="flex  flex-col-reverse lg:flex-row items-center justify-around md:justify-between ">
        {/* Text Section */}
        <div className="flex xl:flex-4/12 items-center justify-center md:w-[100%] w-[366px] max-h-[80vh] h-[273px] p-[30px] align-center ">
          <div className="lg:w-[421px] w-full flex flex-col items-center lg:items-start justify-center px-4 gap-6 md:text-left mb-8 md:mb-0">
            {subtitle && (
            
              <PreTitle className='hidden lg:flex' title={subtitle} color={subtitleColorClass}/>
            )}
            <p className={clsx(' text-[32px]/[32px] md:text-[45px]/[45px] lg:text-[70px]/[70px] font-[400]  text-center lg:text-start', titleColorClass)}>
              {title}
            </p>
            <p  className={clsx('text-[14px] md:text-[16px] font-light  text-font/80  hidden lg:block', )}>
            
              {description}
            </p>
            <p className={clsx('text-[14px] md:text-lg text-center lg:hidden block', descriptionColorClass)}>   
              {descriptionForSmallScreens}
            </p>
            <Button
              variant={buttonColorClass}
              className={clsx(

                ' h-[50px] w-[224px] min-[150px]'
              )}
            >
              {buttonText}
            </Button>
          </div>
        </div>
        {/* Image Section */}
      
          <Image
            src={image}
            alt={title}
          className="object-cover w-full    lg:h-[851px]  md:h-[500px] max-h-[80vh]    h-[380px]  "
            priority
          />
       
      </div>
    </div>
  )
}
