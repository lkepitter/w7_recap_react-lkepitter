import React from "react";

export default function BlogPost({
  text,
  title,
  author,
  datePosted,
  image,
  alt,
}) {
  return (
    <article className="blogPost">
      <h1 id="postTitle">{title}</h1>
      <h2 id="postAuthor">by {author}</h2>
      <p id="postDate">{datePosted}</p>
      <img src={image} alt={alt} caption={alt}></img>
      <p id="postText">{text}</p>
    </article>
  );
}
