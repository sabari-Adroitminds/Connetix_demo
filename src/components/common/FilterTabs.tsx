'use client';
import clsx from 'clsx';
import React, { useState } from 'react';

type Tab = {
    label: string;
    value: string;
};

const tabs: Tab[] = [
    { label: 'Shop All', value: 'all' },
    { label: 'Rainbow Range', value: 'rainbow' },
    { label: 'Clear Range', value: 'clear' },
    { label: 'Pastel Range', value: 'pastel' },
    { label: 'Ball Runs', value: 'ball-runs' },
    { label: 'Base Plates', value: 'base-plates' },
    { label: 'Roads & Transport', value: 'roads' },
];

const FilterTabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('all');
 
    return (
        <div className="flex px-4 space-x-6 lg:border-b border-gray-200 md:w-fit w-full  overflow-auto transform transition-all duration-300 ease-in-out">
            {tabs.map((tab) => (
                <button
                    key={tab.value}
                    onClick={() => setActiveTab(tab.value)}
                    className={clsx(
                        'lg:pb-2 text-[16px] font-[200]  transition-colors min-w-fit',
                        activeTab === tab.value
                            ? 'text-navy  lg:border-b-2 border-yellow bg-yellow px-4 rounded-[100px] min-w-[100px] h-[37px] lg:h-auto lg:bg-white lg:rounded-[0px]'
                            : 'text-gray-400 hover:text-black'
                        ,
                        activeTab === tab.value ? 'font-[600]' : ''
                    )}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
};

export default FilterTabs;
