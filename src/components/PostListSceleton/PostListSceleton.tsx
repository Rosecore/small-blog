import React from "react";

const PostListSceleton = () => {
  return (
    <div className="mx-auto mt-10 grid max-w-2xl grid-cols gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-1">
      <article className="flex max-w-xl flex-col items-start justify-between animate-pulse">
        <div className="flex items-center gap-x-4 text-xs">
          <div className="h-4 bg-gray-300 rounded w-24"></div>
        </div>
        <div className="group relative mt-3">
          <div className="h-6 bg-gray-300 rounded w-3/4"></div>
          <div className="mt-5 h-4 bg-gray-300 rounded w-full"></div>
          <div className="mt-2 h-4 bg-gray-300 rounded w-5/6"></div>
          <div className="mt-2 h-4 bg-gray-300 rounded w-4/6"></div>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
        </div>
      </article>
    </div>
  );
};

export default PostListSceleton;
