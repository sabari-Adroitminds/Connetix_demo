'use client'


import clsx from 'clsx'

import React, { useState } from 'react'
import { Accordion, AccordionItem } from '../../Accordion'
import { playTileData, shopTileData } from '../constant'
import { Button } from '@/components/ui/button'
import IconMenu from '@/components/icons/IconMenu'
import CountrySelector from '../../top-bar/CountrySelector'

const MobileMenu = () => {
    const [open, setOpen] = useState(false)
    const handleToggle = () => {
        setOpen(!open)
    }
    return (
        <div className='block lg:hidden relative transition-all duration-300 '>
            <div className='flex gap-2 items-center' onClick={handleToggle}>
                <IconMenu className={clsx(' transition',
                    open ? 'rotate-45 duration-500' : 'rotate-0 duration-500', 'text-[14px] text-primary cursor-pointer'
                )} />
                <p className='mt-1 font-bold text-[14px] '>{open ? 'Close' : 'Menu'}</p>
            </div>

            {<div className={clsx(
                'absolute z-1000 -left-4 top-[47px] min-w-[100vw] min-h-full bg-white p-4 pb-[50px] transform transition-transform duration-700 ease-in-out',
                open ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'
            )}>
                <Accordion>
                    <AccordionItem title="Shop">
                        <ul>
                            {shopTileData.map((item, index) => (
                                <li key={index}>
                                    {item.title}
                                </li>
                            ))}
                        </ul>
                    </AccordionItem>
                    <AccordionItem title="Play">
                        <ul>
                            {playTileData.map((item, index) => (
                                <li key={index}>
                                    {item.title}
                                </li>
                            ))}
                        </ul>
                    </AccordionItem>
                    <AccordionItem title="Learn">
                        Yes! You can use the `AccordionItem` inside `Accordion` as many times as you like.
                    </AccordionItem>
                    <AccordionItem title="Connect">
                        Yes! You can use the `AccordionItem` inside `Accordion` as many times as you like.
                    </AccordionItem>
                </Accordion>
                <Button variant='secondary' className='min-w-[150px] w-full mt-2 ' >
                    Where to buy
                </Button>
                <div className="mt-5 mb-3 px-3 grid grid-cols-2 gap-8 text-sm text-gray-700 justify-center">
                    {/* Quicklinks */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-3">Quicklinks</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">Our Story</a></li>
                            <li><a href="#" className="hover:underline">Become a retailer</a></li>
                            <li><a href="#" className="hover:underline">Collaborate</a></li>
                            <li><a href="#" className="hover:underline">The Connetix Difference</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-3">Support</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">Shipping</a></li>
                            <li><a href="#" className="hover:underline">FAQs</a></li>
                            <li><a href="#" className="hover:underline">Refunds</a></li>
                            <li><a href="#" className="hover:underline">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className='absolute w-full h-[40px] left-0 bottom-0 flex items-center justify-center  bg-off-white-2'>
                    <CountrySelector className='flex' dropdownPosition={{ bottom: 40, right: 50 }} />
                </div>
            </div>}

        </div>
    )
}

export default MobileMenu 