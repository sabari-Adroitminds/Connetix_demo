import EducationalToy from '@/components/common/EducationalToy'
import AwardWinning from '@/components/home/awards'
import { ImageSlider } from '@/components/home/imageSlider'
import { PlayLearnConnect } from '@/components/home/play-learn-connect'
import Products from '@/components/home/products'
import Testimonials from '@/components/home/testimonials'
import WhyConnetix from '@/components/home/whyConnetix'
import React from 'react'

const Home = () => {
  return (
    <div className=' flex flex-col gap-[100px]'>
      <ImageSlider/>
      <Products/>
      <AwardWinning/>
      <EducationalToy/>
      <WhyConnetix />
      <PlayLearnConnect />
      <Testimonials/>
    </div>
  )
}

export default Home