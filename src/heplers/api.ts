import { CommentType, ImageType, PostType } from "./types";

export const getBlogPost = async (
  query: string,
  limit: number = 10
): Promise<PostType[]> => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts${
      query ? `?title_like=${query}&_` : "?"
    }limit=${limit}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
};

export const getBlogPostById = async (id: number): Promise<PostType> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }
  return res.json();
};

export const getBlogCommentsById = async (
  id: number
): Promise<CommentType[]> => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }
  return res.json();
};

export const getImageById = async (id: number): Promise<ImageType> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }
  return res.json();
};
