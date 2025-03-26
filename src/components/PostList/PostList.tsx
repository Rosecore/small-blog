"use client";
import { useBlogStore } from "@/store/BlogStore";
import BlogPost from "../BlogPost/BlogPost";
import { PostType } from "@/heplers/types";
import { useMemo } from "react";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";

type PostListProps = {
  posts: PostType[];
};

export default function PostList({ posts }: Readonly<PostListProps>) {
  const { searchQuery, limit } = useBlogStore();

  const filteredPosts = useMemo(() => {
    return posts.filter(
      post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        post.id <= limit
    );
  }, [posts, searchQuery, limit]);

  const renderPosts = () => {
    if (filteredPosts.length === 0) {
      return <p className="text-center text-gray-500">No posts found</p>;
    }

    return filteredPosts.map(post => (
      <BlogPost
        key={post.id}
        title={post.title}
        description={post.body}
        date={new Date().toLocaleDateString()}
        id={post.id}
      />
    ));
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-4xl space-y-4">{renderPosts()}</div>

      {filteredPosts.length > 0 && (
        <div className="mt-5">
          <LoadMoreButton />
        </div>
      )}
    </div>
  );
}
