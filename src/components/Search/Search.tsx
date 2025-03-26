"use client";
import { debounce } from "@/heplers/heplers";
import { useBlogStore } from "@/store/BlogStore";
import React, { useDeferredValue } from "react";

const Search = () => {
  const store = useBlogStore();
  const deferredQuery = useDeferredValue(store.searchQuery);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    store.onChangeSearchQuerry(e.target.value);
  };
  const debouncedHandleInput = debounce(handleInputChange, 500);

  return (
    <div className="flex justify-center mt-4">
      <input
        type="text"
        onChange={debouncedHandleInput}
        className="w-full max-w-md p-2 border border-gray-300 rounded-md bg-[#D1CFCC] text-[#02101D] shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        placeholder="Search..."
        defaultValue={deferredQuery}
      />
    </div>
  );
};

export default Search;
