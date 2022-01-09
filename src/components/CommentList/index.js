import React from "react";
import Comment from "../Comment";

export default function CommentList({ postComments }) {
  return (
    <ul>
      {postComments.map(function (item) {
        return (
          <Comment
            key={item.author + item.text}
            author={item.author}
            text={item.text}
          />
        );
      })}
    </ul>
  );
}
