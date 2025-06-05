'use client';
import React, { useState } from 'react';
import { Search as IconSearch } from 'lucide-react';
import clsx from 'clsx';

interface ISearchProps {
    className?: string;
    label?:string;
}

const Search: React.FC<ISearchProps> = ({ className, label }) => {
    const [query, setQuery] = useState('');

    return (
        <div className={clsx("flex items-center h-[50px] w-full max-w-[332px] px-4 py-2 bg-white border border-gray-200 rounded-[12px]", className)}>
            <IconSearch className="w-5 h-5 text-orange-400 mr-2" />
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={label || "Search products..."}
                className="w-full bg-transparent focus:outline-none text-gray-600 placeholder-gray-500"
            />
        </div>
    );
};

export default Search;
