'use client';
import React, { useState } from 'react';
import { Search as IconSearch } from 'lucide-react';

const Search: React.FC = () => {
    const [query, setQuery] = useState('');

    return (
        <div className="flex items-center h-[50px] w-full max-w-[332px] px-4 py-2 bg-white border border-gray-200 rounded-[12px]  focus-within:ring-2 focus-within:ring-orange-400">
            <IconSearch className="w-5 h-5 text-orange-400 mr-2" />
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search all products"
                className="w-full bg-transparent focus:outline-none text-gray-600 placeholder-gray-500"
            />
        </div>
    );
};

export default Search;
