import RangeCard from '@/components/common/cards/RangeCard'
import { Carousel, CarouselContent } from '@/components/common/carousel/CardSlider'
import React from 'react'
import { connetixPacks } from './constant'
const ProductScroll = () => {
    return (
        <>
            <Carousel>
                <CarouselContent>
                    {connetixPacks.map((pack, index) => (
                        <RangeCard
                            key={index}
                            image={pack.image}
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
            </Carousel>
        </>
    )
}

export default ProductScroll