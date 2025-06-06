import ProductCard from '@/components/common/cards/ProductCard'
import PromoCard from '@/components/common/cards/PromoCard'


import React from 'react'
import PaginationComponent from './PaginationComponent'

const ProductsList = () => {
  return (
    <div>
      <div className='grid xl:grid-cols-3 grid-cols-2 gap-y-8 md:gap-y-12 gap-2 md:gap-4 place-items-center py-6 px-4 md:px-10'>
        {Array(12).fill(<ProductCard title={'Rainbow Starter Pack 60 pc'} price={'$129.00 AU'} imageUrl={'/images/products/Ball Runs.png'} reviews={0} />).map((_, index) => {

          if(index===8){
            return (
              <div key={index} className='w-full h-full col-span-2 xl:col-span-1 place-items-center'>
                <PromoCard key={index}
              imageUrl="/images/ProductPromoImage.png" // replace with actual path or URL
              headline="Searching for the latest building ideas for your Connetix tiles?"
              buttonText="Explore Building Ideas"

            />
            </div>
            )
          }
          return _
        })}

     
    
     
    </div>
    <PaginationComponent/>
    </div>
  )
}

export default ProductsList