'use client'


import { useState } from 'react'
import testImage from '../../../../public/images/products/Rainbow Creative.png'
import CartItemList from './components/CartItemList'
import { Button } from '@/components/ui/button'
import AddOnCard from '../cards/SmallAddOnCard'
import clsx from 'clsx'
import IconClose from '@/components/icons/IconClose'


interface ICartProps  {
    
    close: () => void 
    className?: string
}
const Cart: React.FC<ICartProps> = ({ close, className }) => {
    const [items, setItems] = useState([
        { id: 1, title: 'Rainbow Creative Pack 102 pc', price: 169, quantity: 2, image: testImage },
        { id: 2, title: 'Rainbow Creative Pack 102 pc', price: 119, quantity: 1, image: testImage },
        { id: 3, title: 'Rainbow Creative Pack 102 pc', price: 119, quantity: 1, image: testImage },
    ])

    const [addons] = useState([
        { id: 4, title: 'Rainbow Ball Pack 12 pc', price: 19, image: testImage },
        { id: 5, title: 'Rainbow Blue & Green Base Plate 2 pc', price: 69, image: testImage },
    ])

    const updateQuantity = (id: number, delta: number) => {
        setItems(prev =>
            prev.map(item =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                    : item
            )
        )
    }

    const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0)

    return (
        <div className={clsx("lg:max-w-[561px] max-w-[402px] max-h-[80vh] overflow-auto bg-[#F2F2F2] rounded-xl shadow-md p-6 space-y-4", className)}>
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800">My Cart</h2>
                <button onClick={close} className="lg:text-xl text-[24px]  text-black hover:text-gray-800 hover:cursor-pointer"><IconClose/></button>
            </div>

            <CartItemList items={items} updateQuantity={updateQuantity} />
 
            {/* Subtotal */}
            <div className="border-y-2  py-4 border-primary-very-light/20 flex justify-between items-center text-sm font-medium">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)} (incl. tax)</span>
            </div>

            {/* Checkout Button */}
            <Button variant={'primary'} className="w-full py-3  transition">
                Checkout
            </Button>

            {/* Add-ons */}
            <div>
                <p className="text-sm font-semibold text-navy/70 mb-2 mt-15">Product Add Ons</p>
                <div className="space-y-3">
                    {addons.map((addon) => (
            
                            <AddOnCard key={addon.id} imageSrc={addon.image} title={addon.title} quantity={''} price={addon.price.toFixed(2)} />

                          
          
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Cart
