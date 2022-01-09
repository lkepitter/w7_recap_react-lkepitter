import React from "react";

export default function Comment({ text, author }) {
  if (author.includes(" ")) {
    return (
      <article id="commentBox">
        <div id="commentAuthor">
          <div id="circle">
            <p id="authorLogo">
              {author[0]}
              {author.split(" ")[1][0]}
            </p>
          </div>
          <p id="authorText">{author}</p>
        </div>
        <p id="commentText">{text}</p>
      </article>
    );
  } else {
    return (
      <article id="commentBox">
        <div id="commentAuthor">
          <div id="circle">
            <p id="authorLogo">{author[0]}</p>
          </div>
          <p id="authorText">{author}</p>
        </div>
        <p id="commentText">{text}</p>
      </article>
    );
  }
}
