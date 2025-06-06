import RangeCard from '@/components/common/cards/RangeCard'
import { Carousel, CarouselContent, CarouselScrollbar } from '@/components/common/carousel/CardSlider'
import React from 'react'
import { connetixPacks } from './constant'
const ProductScroll = () => {
    return (
        <>
            <Carousel>
                <CarouselContent className='gap-6 px-20'>
                    {connetixPacks.map((pack, index) => (
                        <RangeCard
                            key={index}
                            image={pack.image}
                            imageStyle={pack.imageStyle}
                            title={pack.title}
                            description={pack.description}
                            buttonLabel={pack.buttonLabel}
                            diamondColor={pack.diamondColor}
                            diamondHoverColor={pack.diamondHoverColor}
                            buttonColor={pack.buttonColor}
                            buttonHoverColor={pack.buttonHoverColor}
                            buttonTextColor={pack.buttonTextColor}
                        />
                    ))}
                </CarouselContent>
                <div>
                <CarouselScrollbar onlyButton className='md:hidden' />
                </div>
            </Carousel>
           
        </>
    )
}

export default ProductScroll