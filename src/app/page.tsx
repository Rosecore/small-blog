import PostList from "@/components/PostList/PostList";
import PostListSceleton from "@/components/PostListSceleton/PostListSceleton";
import { getBlogPost } from "@/heplers/api";
import { Suspense } from "react";
export default async function Page() {
  const posts = await getBlogPost("", 10);
  return (
    <div className="w-full p-16">
      <div className="flex w-full items-center justify-center">
        <h1 className="text-2xl">Blog Posts</h1>
      </div>
      <div className="mt-4 flex items-center justify-center flex-col gap-2 md:mt-8">
        <Suspense fallback={<PostListSceleton />}>
          <PostList posts={posts} />
        </Suspense>
      </div>
    </div>
  );
}
