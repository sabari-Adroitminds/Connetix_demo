import Slider from '@/components/common/carousel/Slider'
import SliderItem from '@/components/common/carousel/Slider/SliderItem'
import React from 'react'

import heroImage from "../../../../public/images/hero.jpg";
import hero1Image from "../../../../public/images/hero2.png";
import hero2Image from "../../../../public/images/hero3.png";
import HeroImageCard from './HeroImageCard';
const ImageSlider = () => {

    const buttonColors = ["bg-primary-tint", "bg-secondary-tint", "bg-yellow-tint"];
    const buttonBorders = [
        "border-4 border-primary",
        "border-4 border-secondary",
        "border-4 border-yellow",
    ];

  return (
      <Slider buttonColors={buttonColors} buttonBorderColors={buttonBorders}>
          {items.map((item, index) => (
              <SliderItem key={`slider-item-${index}`}>{item}</SliderItem>
          ))}
      </Slider>
  )
}

export default ImageSlider
const items = [
    <HeroImageCard
        title="Where play & learning connect"
        descriptionForSmallScreens="Connetix inspires open-ended play and brings imagination to life."
        subtitle="Award winning educational toy"
        description="Connetix inspires open-ended play and brings imagination to life. Unlock creativity and build BIGGER with strong magnets, vibrant colours and stunning clear refractions."
        buttonText="Shop Now"
        bgColorClass="bg-primary-tint"
        titleColorClass="text-navy"
        subtitleColorClass="bg-primary"
        descriptionColorClass="text-navy"
        buttonColorClass="primary"
        buttonHoverColorClass="hover:bg-primary-tint"
        image={heroImage}
        key={1}
    />,
    <HeroImageCard
        title="All new Roads range"
        subtitle="Now Available"
        descriptionForSmallScreens="Fuel epic adventures through play with these transport inspired CONNETIX ranges."
        description="Fuel epic adventures through play with these transport inspired CONNETIX ranges, paving the way to fun with the Roads Range"
        buttonText="Shop roads"
        bgColorClass="bg-secondary-tint"
        titleColorClass="text-navy"
        subtitleColorClass="bg-secondary"
        descriptionColorClass="text-navy"
        buttonColorClass="secondary"
        buttonHoverColorClass="hover:bg-primary-tint"
        image={hero1Image}
        key={2}
    />,
    <HeroImageCard
        title="5 Fun Christmas Play Ideas"
        subtitle="Christmas with Connetix"
        descriptionForSmallScreens="Christmas is a magical time to gather with loved ones, share joyful moments and create lasting memories."
        description="Christmas is a magical time to gather with loved ones, share joyful moments and create lasting memories. What better way to celebrate the season than through play?"
        buttonText="Connetix christmas"
        bgColorClass="bg-yellow-tint"
        titleColorClass="text-navy"
        subtitleColorClass="bg-yellow"
        descriptionColorClass="text-navy"
        buttonColorClass="yellow"
        buttonHoverColorClass="hover:bg-primary-tint"
        image={hero2Image}
        key={3}
    />,
];