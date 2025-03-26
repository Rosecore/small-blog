"use client";
import { useBlogStore } from "@/store/BlogStore";
import React from "react";

const LoadMoreButton = () => {
  const store = useBlogStore();
  const onClick = () => {
    store.onChangeLimit(store.limit + 10);
  };
  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={onClick}
        className="px-4 py-2 bg-[#D1CFCC] text-[#02101D] rounded-md shadow-sm hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-[#02101D] "
      >
        Load More
      </button>
    </div>
  );
};

export default LoadMoreButton;
