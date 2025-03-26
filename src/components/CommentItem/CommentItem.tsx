import { CommentType } from "@/heplers/types";
import Image from "next/image";

export const CommentItem = ({ id, name, body, email }: CommentType) => (
  <li className="flex justify-between gap-x-6 py-5" key={id}>
    <div className="flex min-w-0 gap-x-4">
      <Image
        className="size-12 flex-none rounded-full bg-gray-50"
        src="https://dummyimage.com/600x400/05ff7a/f739f4"
        alt={`${name}'s profile`}
        width={48}
        height={48}
      />
      <div className="min-w-0 flex-auto">
        <p className="text-sm/6 font-semibold text-gray-900">{name}</p>
        <p className="mt-1 text-xs/5 text-gray-500">{body}</p>
      </div>
    </div>
    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
      <p className="text-sm/6 text-gray-900">{email}</p>
    </div>
  </li>
);
