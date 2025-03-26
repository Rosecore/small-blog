import Link from "next/link";
import React from "react";
import Image from "next/image";

interface BlogPostProps {
  title: string;
  description: string;
  date: string;
  id: number;
}

const BlogPost = ({ title, description, date, id }: BlogPostProps) => {
  return (
    <div className="mx-auto mt-10 grid max-w-2xl grid-cols gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-1">
      <article className="flex max-w-xl flex-col items-start justify-between">
        <div className="flex items-center gap-x-4 text-xs">
          <time dateTime={date} className="text-gray-500">
            {date}
          </time>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
            <Link href={`/blog/${id}`}>{title}</Link>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
            {description}
          </p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <Image
            className="inline-block size-12 rounded-full ring-2 ring-white"
            src={"https://dummyimage.com/600x400/05ff7a/f739f4"}
            width={40}
            height={40}
            alt=""
          ></Image>
          <div className="text-sm/6">
            <p className="font-semibold text-gray-900">Name</p>
            <p className="text-gray-600">Job position</p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
