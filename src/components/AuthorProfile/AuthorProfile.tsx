import Image from "next/image";

export const AuthorProfile = () => (
  <div className="relative mt-8 flex items-center gap-x-4 mb-8">
    <Image
      className="inline-block size-50 rounded-full ring-2 ring-white"
      src="https://dummyimage.com/600x400/05ff7a/f739f4"
      width={320}
      height={320}
      alt="Author profile"
    />
    <div className="text-3xl">
      <p className="font-semibold text-gray-900">Name</p>
      <p className="text-gray-600">Job position</p>
    </div>
  </div>
);
