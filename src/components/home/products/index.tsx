import React from 'react'
import ProductScroll from './ProductScroll'

const Products = () => {
  return (
    <>
      <div className='flex flex-col items-center my-10 ' >
        <p className=' xl:text-[50px]/[82px] lg:text-[46px]/[78px] text-[30px]/[74px]  font-[350px]  -tracking-[1px] items-center '>
          Imagine with the world of tiles
        </p>
      </div>
      <ProductScroll />
    </>
  )
}

export default Products