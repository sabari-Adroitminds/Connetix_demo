'use client'
import IconCart from '@/components/icons/IconCart'
import { Button } from '@/components/ui/button'
import React from 'react'
import { Cart } from '../../cart'

const CartButton = () => {
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => {
        setOpen(!open)
    }
    return (
        <>
            <Button onClick={handleOpen} className='min-w-[50px] w-[50px] h-[50px] rounded-full bg-white   items-center justify-center hidden lg:flex'>
                <IconCart />
            </Button>
            <IconCart onClick={handleOpen} className='block lg:hidden' />
            {open && <div className='absolute top-15 lg:top-22 right-0 z-50'>
                <Cart close={handleOpen}/>
            </div>}
        </>
    )
}

export default CartButton