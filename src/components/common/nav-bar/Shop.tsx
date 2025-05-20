import React from 'react'


import SubMenuCard from './SubMenuCard';
import { shopTileData } from './constant';






const Shop = () => {
  return (
   <>
      <SubMenuCard data={shopTileData}>
        <div className="text-xl font-bold">Shop Categories</div>
      </SubMenuCard>
   </>
  )
}

export default Shop