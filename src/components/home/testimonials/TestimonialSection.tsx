import TestimonialCard from '@/components/common/cards/TestimonialCard';
import { Carousel, CarouselContent, CarouselItem, CarouselScrollbar } from '@/components/common/carousel/CardSlider';
import React from 'react'

const TestimonialSection = () => {

    const slides = Array.from({ length: 10 }, (_, i) => (
        <TestimonialCard
            key={`testimonial-${i}`}
            name="Wendy, T"
            location="United Kingdom"
            review="I love how educational they are too. We’ve been learning shapes and how to mix primary colours to make other colours. Instagram has also provided endless ideas of ways to play. Best money we ever spent on a toy."
            rating={5}
        />
    ));

  return (
      <Carousel className="p-4">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>{slide}</CarouselItem>
          ))}
        </CarouselContent>
        <CarouselScrollbar />
      </Carousel> 
  )
}

export default TestimonialSection