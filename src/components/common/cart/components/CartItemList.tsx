import React from 'react'
import Image, { StaticImageData } from 'next/image'
import QuantitySelector from './QuantitySelector'

export type CartItem = {
    id: number
    title: string
    price: number
    quantity: number
    image: string | StaticImageData
}

type CartItemListProps = {
    items: CartItem[]
    updateQuantity: (id: number, delta: number) => void
}

const CartItemList: React.FC<CartItemListProps> = ({ items, updateQuantity }) => {
    return (
        <div className="gap-4 flex flex-col">
            {items.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                    <Image
                        src={item.image}
                        alt={item.title}
                        className="rounded-md object-cover h-[86px] w-[100px] lg:h-[106px] lg:w-[123px] "
                    />
                    <div className="flex-1 flex flex-col gap-1">
                        <p className="font-semibold text-gray-800 lg:text-xl text-[16px]">
                            {item.title}
                        </p>
                        <p className="lg:text-sm text-[12px] text-gray-600">${item.price.toFixed(2)} AUD</p>
                        <div className='flex justify-between items-center'>
                            <QuantitySelector
                                value={item.quantity}
                                onChange={(delta) => updateQuantity(item.id, delta)}
                            />
                            <p className="font-medium lg:text-sm text-[12px] text-right ">
                                Total ${(item.price * item.quantity).toFixed(2)} AUD
                            </p>
                        </div>
                    </div>


                </div>
            ))}
        </div>
    )
}

export default CartItemList
