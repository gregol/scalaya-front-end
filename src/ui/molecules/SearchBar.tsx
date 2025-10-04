'use client';

import { useState } from 'react';
import Image from 'next/image';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
}

export function SearchBar({
  placeholder = 'Search products…',
  onSearch,
  className = '',
}: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [_category, _setCategory] = useState('all');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`relative flex items-center h-[50px] bg-white rounded-md overflow-hidden ${className}`}
    >
      {/* Category Dropdown */}
      <div className="relative flex items-center gap-2 px-5 py-[10px] border-r border-accent-gray">
        <span className="text-body text-textDark whitespace-nowrap">
          All Categories
        </span>
        <Image
          src="/assets/figma/icon-dropdown.svg"
          alt=""
          width={9}
          height={5}
          className="w-[8.51px] h-[5px]"
        />
      </div>

      {/* Search Input */}
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="flex-1 h-full px-4 text-body text-textDark placeholder:text-textLight bg-transparent border-none outline-none focus:outline-none"
      />

      {/* Search Button */}
      <button
        type="submit"
        className="h-full w-[50px] bg-primary-500 flex items-center justify-center rounded-r-md hover:bg-primary-600 transition-colors"
        aria-label="Search"
      >
        <Image
          src="/assets/figma/icon-search.svg"
          alt=""
          width={17}
          height={17}
          className="w-5 h-5"
        />
      </button>
    </form>
  );
}

