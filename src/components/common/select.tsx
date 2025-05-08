'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type SortBySelectProps = {
  label: string;
  options: string[];
};

const SortBySelect = ({ label, options }: SortBySelectProps) => {
  const [selected, setSelected] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: string) => {
    setSelected((prev) => (prev === option ? '' : option));
    setIsOpen(false);
  };

  return (
    <div className="relative w-64">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-4 py-2 border border-gray-300 bg-white rounded-md shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <span>{selected ? `${label}: ${selected}` : label}</span>
        <ChevronDown className="w-4 h-4" />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
          {options.map((option) => (
            <label
              key={option}
              className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <input
                type="checkbox"
                className="form-checkbox text-blue-600 mr-2"
                checked={selected === option}
                onChange={() => handleSelect(option)}
              />
              <span className="text-sm text-gray-800">{option}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortBySelect;
