import React from 'react'
import logo from '../../../../public/images/Logo.svg'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Navigation from './Navigation'
import MobileMenu from './mobile/MobileMenu'

const NavBar = () => {
  return (
    <div className='w-full  h-[82px] flex items-center justify-between px-4 '>
      <MobileMenu/>
      <Image src={logo} alt="Logo" />
      <Navigation />
      <div className='items-center gap-4 hidden lg:block'>
        <Button variant='secondary' className='min-w-[150px] ' >
          Where to buy
        </Button>
      </div>
    </div>
  )
}

export default NavBar