'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import CheckBox from './inputs/CheckBox';
import clsx from 'clsx';

type SortBySelectProps = {
  label: string;
  options: string[];
  className?: string;
};

const SortBySelect = ({ label, options, className }: SortBySelectProps) => {
  const [selected, setSelected] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (option: string) => {
    setSelected((prev) => (prev === option ? '' : option));
    setIsOpen(false);
  };
  useEffect(() => {

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])
  return (
    <div ref={dropdownRef} className="relative max-w-[320px] w-full h-[50px]">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={clsx("w-full h-[50px] flex justify-between items-center px-4 py-2 border border-gray-200 bg-white rounded-md text-sm ", className)}
      >
        <div>{selected ? <>
          {<><span className='font-medium'>{label}</span>
            <span> {selected}</span></>}
        </>
          : <span className='font-medium'>{label}</span>}
        </div>
        <ChevronDown className="w-4 h-4" />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute z-10  w-full bg-white border border-gray-300 rounded-md shadow-lg">
          {options.map((option) => (
            <label
              key={option}
              className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <CheckBox label={option} checked={selected === option} onChange={() => handleSelect(option)} />
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortBySelect;
