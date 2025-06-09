'use client'
import IconSearch from '@/components/icons/IconSearch';
import IconUser from '@/components/icons/IconUser';
import { useState } from 'react';
import CountrySelector from './CountrySelector';


const tabs = ['TILES', 'PROS', 'BLOCKS'];

export default function TopBar() {
    const [activeTab, setActiveTab] = useState('TILES');

    return (
        <div className="w-full bg-off-white-2 h-[40px] flex items-center justify-between pr-1 text-sm font-medium">
            <div className="flex">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`w-[63px] lg:w-[86px] h-[40px] ${activeTab === tab
                                ? 'text-black font-bold bg-white'
                                : 'text-gray-500 hover:text-black'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="flex items-center  text-gray-700 h-full lg:border-l-2 border-white">
                <CountrySelector className='hidden' dropdownPosition={{ top: 40, right: 40 }} />
                <div className='w-[52px] h-full  lg:border-l-2 border-white flex items-center justify-center'>
                    <IconSearch />
                </div>
                <div className='w-[52px] h-full  lg:border-l-2 border-white flex items-center justify-center'>
                <IconUser  />
                </div>
              
            </div>
        </div>
    );
}
