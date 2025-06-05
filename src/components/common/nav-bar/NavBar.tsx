import React from 'react'
import logo from '../../../../public/images/Logo.svg'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Navigation from './Navigation'
import MobileMenu from './mobile/MobileMenu'
import CartButton from './components/CartButton'

const NavBar = () => {
  return (
    <div className='w-full h-[55px] lg:h-[82px] flex items-center justify-between p-4 shadow-purple-soft'>
      <MobileMenu/>
      <Image src={logo} alt="Logo" className='h-[28px] w-[170px] lg:h-[40px] lg:w-[238px]' />
      <Navigation />
      <div className= 'flex gap-4 items-center'>
        <Button variant='secondary' className='min-w-[150px] hidden lg:block ' >
          Where to buy
        </Button>
        <CartButton /> 
      </div>
     
    </div>
  )
}

export default NavBar