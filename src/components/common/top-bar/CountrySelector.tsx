'use client';

import IconDownArrow from '@/components/icons/IconDownArrow';
import clsx from 'clsx';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';

type Country = {
    code: string;
    name: string;
};

interface ICountrySelector {
    className?: string;
    dropdownPosition?: React.CSSProperties;
}

const countries: Country[] = [
    { code: 'au', name: 'AUS' },
    { code: 'us', name: 'USA' },
    { code: 'in', name: 'IND' },
    { code: 'gb', name: 'UK' },
];

const CountrySelector: React.FC<ICountrySelector> = ({ className, dropdownPosition }) => {
    const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => setIsOpen((prev) => !prev);
    const selectCountry = (country: Country) => {
        setSelectedCountry(country);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div
            ref={dropdownRef}
            className={clsx("relative w-[193px] h-full lg:flex items-center justify-center text-sm text-gray-700", className)}
        >
            {/* Trigger */}
            <div className="flex items-center gap-2 cursor-pointer" onClick={toggleDropdown}>
                <span className="text-xs">Shipping to</span>
                <Image
                    width={12}
                    height={12}
                    src={`https://flagcdn.com/w40/${selectedCountry.code}.png`}
                    alt={selectedCountry.name}
                    className="w-4 h-4 rounded-full"
                />
                <span>{selectedCountry.name}</span>
                <IconDownArrow />
            </div>

            {/* Dropdown */}
            {isOpen && (
                <ul
                    className="w-28 bg-white border rounded shadow-md max-h-60 overflow-auto z-50"
                    style={{
                        position: 'absolute',
                        ...(dropdownPosition || { top: 100, left: 100 }),
                    }}
                >
                    {countries.map((country) => (
                        <li
                            key={country.code}
                            onClick={() => selectCountry(country)}
                            className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                            <Image
                                width={16}
                                height={16}
                                src={`https://flagcdn.com/w40/${country.code}.png`}
                                alt={country.name}
                                className="w-4 h-4 rounded-full"
                            />
                            <span>{country.name}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CountrySelector;
