import Slider from '@/components/common/carousel/Slider'
import SliderItem from '@/components/common/carousel/Slider/SliderItem'
import React from 'react'

import HeroImageCard from './HeroImageCard';
import { HeroImageCardProps } from '@/types/intetrfaces';
const items: HeroImageCardProps[] = [
    {
        title: 'Where play & learning connect',
        subtitle: 'Award winning educational toy',
        description:
            'Connetix inspires open-ended play and brings imagination to life. Unlock creativity and build BIGGER with strong magnets, vibrant colours and stunning clear refractions.',
        descriptionForSmallScreens:
            'Connetix inspires open-ended play and brings imagination to life.',
        buttonText: 'Shop Now',
        bgColorClass: 'bg-primary-tint',
        titleColorClass: 'text-navy',
        subtitleColorClass: 'bg-primary',
        descriptionColorClass: 'text-navy',
        buttonColorClass: 'primary',
        buttonHoverColorClass: 'hover:bg-primary-tint',
        image: '/images/hero.jpg',
    },
    {
        title: 'All new Roads range',
        subtitle: 'Now Available',
        description:
            'Fuel epic adventures through play with these transport inspired CONNETIX ranges, paving the way to fun with the Roads Range',
        descriptionForSmallScreens:
            'Fuel epic adventures through play with these transport inspired CONNETIX ranges.',
        buttonText: 'Shop roads',
        bgColorClass: 'bg-secondary-tint',
        titleColorClass: 'text-navy',
        subtitleColorClass: 'bg-secondary',
        descriptionColorClass: 'text-navy',
        buttonColorClass: 'secondary',
        buttonHoverColorClass: 'hover:bg-primary-tint',
        image: '/images/hero2.png',
    },
    {
        title: '5 Fun Christmas Play Ideas',
        subtitle: 'Christmas with Connetix',
        description:
            'Christmas is a magical time to gather with loved ones, share joyful moments and create lasting memories. What better way to celebrate the season than through play?',
        descriptionForSmallScreens:
            'Christmas is a magical time to gather with loved ones, share joyful moments and create lasting memories.',
        buttonText: 'Connetix christmas',
        bgColorClass: 'bg-yellow-tint',
        titleColorClass: 'text-navy',
        subtitleColorClass: 'bg-yellow',
        descriptionColorClass: 'text-navy',
        buttonColorClass: 'yellow',
        buttonHoverColorClass: 'hover:bg-primary-tint',
        image: '/images/hero3.png',
    },
]


const ImageSlider = () => {

    const buttonColors = ["bg-primary-tint", "bg-secondary-tint", "bg-yellow-tint"];
    const buttonBorders = [
        "border-4 border-primary",
        "border-4 border-secondary",
        "border-4 border-yellow",
    ];

  return (
      <Slider buttonColors={buttonColors} buttonBorderColors={buttonBorders}>
          {items.map((props: HeroImageCardProps, index) => (
              <SliderItem key={`slider-item-${index}`}>{<HeroImageCard {...props} />}</SliderItem>
          ))}
      </Slider>
  )
}

export default ImageSlider
