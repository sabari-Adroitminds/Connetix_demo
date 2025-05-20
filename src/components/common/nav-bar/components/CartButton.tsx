import IconCart from '@/components/icons/IconCart'
import { Button } from '@/components/ui/button'
import React from 'react'

const CartButton = () => {
    return (
        <>
            <Button className='min-w-[50px] w-[50px] h-[50px] rounded-full bg-white   items-center justify-center hidden lg:flex'>
                <IconCart />
            </Button>
            <IconCart className='block lg:hidden' />
        </>
    )
}

export default CartButton