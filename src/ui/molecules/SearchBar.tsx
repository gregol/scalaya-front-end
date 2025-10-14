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
      className={`relative flex h-[50px] items-center overflow-hidden rounded-md bg-white ${className}`}
    >
      {/* Category Dropdown - Hidden on mobile */}
      <div className="relative hidden items-center gap-2 border-r border-accent-gray px-5 py-[10px] md:flex">
        <span className="text-body whitespace-nowrap text-textDark">
          All Categories
        </span>
        <Image
          src="/assets/figma/icon-dropdown.svg"
          alt=""
          width={9}
          height={5}
          className="h-[5px] w-[8.51px]"
        />
      </div>

      {/* Search Input */}
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="md:text-body h-full flex-1 border-none bg-transparent px-4 text-sm text-textDark outline-none placeholder:text-textLight focus:outline-none"
      />

      {/* Search Button */}
      <button
        type="submit"
        className="flex h-full w-[50px] items-center justify-center rounded-r-md bg-primary-500 transition-colors hover:bg-primary-600"
        aria-label="Search"
      >
        <Image
          src="/assets/figma/icon-search.svg"
          alt=""
          width={17}
          height={17}
          className="h-[18px] w-[18px] md:h-5 md:w-5"
        />
      </button>
    </form>
  );
}
