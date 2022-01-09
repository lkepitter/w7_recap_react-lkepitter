import React, { useState } from "react";
import "./App.css";
import blogPosts from "../../lib/BlogPosts/data";
import comments from "../../lib/Comments/data";
import BlogPost from "../BlogPost";
import CommentsSection from "../CommentsSection";

function App() {
  const [posts, setPosts] = useState(blogPosts);
  const [postComments, setComments] = useState(comments);

  function addComment(author, comment) {
    setComments([...postComments, { author: author, text: comment }]);
  }

  console.log(postComments);
  return (
    <div className="App">
      <main>
        {posts.map(function (item) {
          return (
            <BlogPost
              key={item.author + item.datePosted}
              title={item.title}
              author={item.author}
              datePosted={item.datePosted}
              text={item.text}
              image={item.image}
              alt={item.alt}
            />
          );
        })}
        <CommentsSection addComment={addComment} postComments={postComments} />
      </main>
    </div>
  );
}

export default App;
