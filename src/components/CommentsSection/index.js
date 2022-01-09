import React from "react";
import CommentList from "../CommentList";
import CommentForm from "../CommentForm";

export default function CommentsSection({ postComments, addComment }) {
  return (
    <div className="commentSection">
      <CommentList postComments={postComments} />
      <CommentForm onSubmit={addComment} />
    </div>
  );
}
