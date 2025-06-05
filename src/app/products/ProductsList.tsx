import ProductCard from '@/components/common/cards/ProductCard'
import PromoCard from '@/components/common/cards/PromoCard'


import React from 'react'
import PaginationComponent from './PaginationComponent'

const ProductsList = () => {
  return (
    <div>
      <div className='grid grid-cols-3 gap-4 justify-center'>
        {Array(12).fill(<ProductCard title={'Ball Runs'} price={'120'} imageUrl={'/images/products/Ball Runs.png'} reviews={0} />).map((_, index) => {

          if(index===8){
            return (<PromoCard key={index}
              imageUrl="/images/ProductPromoImage.png" // replace with actual path or URL
              headline="Searching for the latest building ideas for your Connetix tiles?"
              buttonText="Explore Building Ideas"

            />)
          }
          return _
        })}

     
    
     
    </div>
    <PaginationComponent/>
    </div>
  )
}

export default ProductsList