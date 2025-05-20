import React from 'react'



import { shopTileData } from './constant';
import { Button } from '@/components/ui/button';
import SubMenuCard from './components/SubMenuCard';






const Shop = () => {
  return (
   <>
      <SubMenuCard data={shopTileData}> 
        <div className='p-4 gap-4 flex flex-col items-start max-w-[412px]'>
          <h1 className='text-[50px]'>Shop Tiles</h1>
          <p className='text-[16px] font-[500]   text-custom-gray '>The original award winning educational toy that inspires open-ended play and brings imagination to life.</p>
          <div className='flex gap-4 mt-4'>
            <Button className='text-[18px] w-[212px]' variant={'primary'}>
              Shop entire range
            </Button>
            <Button className='text-[18px] w-[212px] border-0' >
              Find a Stockist
            </Button>
          </div>
        </div>
      </SubMenuCard>
   </>
  )
}

export default Shop