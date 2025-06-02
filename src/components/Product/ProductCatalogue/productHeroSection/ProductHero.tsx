import React from 'react'
import HeroSection from './HeroSection'


const ProductHero = () => {
  return (
      <div className="px-6">
          <HeroSection
              title="Shop the Connetix Range"
              description="Enter a world of STEAM learning and open-ended play with Connetix®. Featuring six bright rainbow colours in a range of innovative packs, this range is perfect for encouraging exploration of colours and shapes."
              imageUrl="/images/ProductHeroSection.png"
          />
      </div>
  )
}

export default ProductHero