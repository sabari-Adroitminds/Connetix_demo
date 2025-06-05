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
        <div className="flex px-4 space-x-6 border-b border-gray-200 max-w-fit">
            {tabs.map((tab) => (
                <button
                    key={tab.value}
                    onClick={() => setActiveTab(tab.value)}
                    className={clsx(
                        'pb-2 text-sm  transition-colors',
                        activeTab === tab.value
                            ? 'text-black border-b-2 border-yellow'
                            : 'text-gray-400 hover:text-black'
                        ,
                        activeTab === tab.value ? 'font-medium' : ''
                    )}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
};

export default FilterTabs;
