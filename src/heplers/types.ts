export type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
export type Posts = { posts: PostType[] };

export type CommentType = {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
};

export type ImageType = {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};
