import { CommentType, PostType } from "@/heplers/types";
import { AuthorProfile } from "../AuthorProfile/AuthorProfile";
import { CommentItem } from "../CommentItem/CommentItem";

interface BlogPostProps {
  post: PostType;
  comments: CommentType[];
}

export const SingleBlogPostBody = ({ post, comments }: BlogPostProps) => (
  <div className="max-w-4xl mx-auto p-16">
    <AuthorProfile />

    <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
    <div className="prose mb-8">{post.body}</div>

    <div className="mt-8 border-t border-gray-500">
      <h2 className="text-2xl font-semibold mb-4 mt-4">Comments</h2>
      {comments.length > 0 ? (
        <ul>
          {comments.map(comment => (
            <CommentItem key={comment.id} {...comment} />
          ))}
        </ul>
      ) : (
        <p>No comments yet.</p>
      )}
    </div>
  </div>
);
