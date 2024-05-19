import React from 'react';
import { Input } from 'antd';
import { SearchProps } from '@/Types/TableTypes';
import { FaSearch } from 'react-icons/fa';

const Search = ({ searchHandler, placeholder = 'Search ...' }: SearchProps) => {
  return (
    <div className="relative w-full flex h-[45px] px-2 self-stretch justify-end items-center bg-transparent border rounded-md border-gray-400">
      <FaSearch className=" text-lg ml-2" />
      <Input
        name="search"
        bordered={false}
        id="search"
        type="text"
        autoComplete="off"
        placeholder={placeholder}
        onChange={searchHandler}
        className="w-full border-transparent text-md font-semibold bg-transparent rounded-md border-none focus:border-transparent focus:ring-0 "
      />
    </div>
  );
};

export default Search;
