import Slider from '@/components/common/carousel/Slider'
import SliderItem from '@/components/common/carousel/Slider/SliderItem'
import React from 'react'
import HeroSlider from './heroSlider';
import heroImage from "../../../../public/images/hero.jpg";
import hero1Image from "../../../../public/images/hero2.png";
import hero2Image from "../../../../public/images/hero3.png";
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
    <HeroSlider
        title="Where play & learning connect"
        descriptionForSmallScreens="Connetix inspires open-ended play and brings imagination to life."
        subtitle="Award winning educational toy"
        description="Connetix inspires open-ended play and brings imagination to life. Unlock creativity and build BIGGER with strong magnets, vibrant colours and stunning clear refractions."
        buttonText="Shop Now"
        bgColorClass="bg-primary-tint"
        titleColorClass="text-navy"
        subtitleColorClass="text-primary"
        descriptionColorClass="text-navy"
        buttonColorClass="primary"
        buttonHoverColorClass="hover:bg-primary-tint"
        image={heroImage}
        key={1}
    />,
    <HeroSlider
        title="Where play & learning connect"
        subtitle="Award winning educational toy"
        descriptionForSmallScreens="Connetix inspires open-ended play and brings imagination to life."
        description="Connetix inspires open-ended play and brings imagination to life. Unlock creativity and build BIGGER with strong magnets, vibrant colours and stunning clear refractions."
        buttonText="Shop Now"
        bgColorClass="bg-secondary-tint"
        titleColorClass="text-navy"
        subtitleColorClass="text-primary"
        descriptionColorClass="text-navy"
        buttonColorClass="secondary"
        buttonHoverColorClass="hover:bg-primary-tint"
        image={hero1Image}
        key={2}
    />,
    <HeroSlider
        title="Where play & learning connect"
        subtitle="Award winning educational toy"
        descriptionForSmallScreens="Connetix inspires open-ended play and brings imagination to life."
        description="Connetix inspires open-ended play and brings imagination to life. Unlock creativity and build BIGGER with strong magnets, vibrant colours and stunning clear refractions."
        buttonText="Shop Now"
        bgColorClass="bg-yellow-tint"
        titleColorClass="text-navy"
        subtitleColorClass="text-primary"
        descriptionColorClass="text-navy"
        buttonColorClass="yellow"
        buttonHoverColorClass="hover:bg-primary-tint"
        image={hero2Image}
        key={3}
    />,
];