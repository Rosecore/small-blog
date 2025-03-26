import { getBlogPostById, getBlogCommentsById } from "@/heplers/api";
import React from "react";
import { SingleBlogPostBody } from "@/components/SingleBlogPostBody/SingleBlogPostBody";

export default async function BlogPostPage({
  params,
}: Readonly<{
  params: Promise<{ slug: string }>;
}>) {
  const { slug } = await params;

  const [post, comments] = await Promise.all([
    getBlogPostById(Number(slug)),
    getBlogCommentsById(Number(slug)),
  ]);

  return <SingleBlogPostBody post={post} comments={comments} />;
}
