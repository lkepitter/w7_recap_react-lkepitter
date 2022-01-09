import { useState } from "react";

export default function CommentForm({ onSubmit }) {
  const [author, setAuthor] = useState("Anon Author");
  const [comment, setComment] = useState("");

  function handleAuthorChange(event) {
    setAuthor(event.target.value);
  }
  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  return (
    <div id="commentForm">
      <input
        id="authorInput"
        placeholder="Name"
        onChange={handleAuthorChange}
        default="Anon Author"
        value={author}
      ></input>
      <input
        id="commentInput"
        placeholder="Write a response..."
        onChange={handleCommentChange}
        value={comment}
      ></input>
      <button
        id="commentSubmit"
        onClick={function () {
          if (comment !== "") {
            onSubmit(author, comment);
            setComment("");
            setAuthor("Anon Author");
          }
        }}
      >
        Submit
      </button>
    </div>
  );
}
