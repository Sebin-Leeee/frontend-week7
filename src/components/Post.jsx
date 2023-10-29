import React, { useState, useEffect } from "react";

const Post = ({ post }) => {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
      .then((response) => response.json())
      .then((data) => {
        setAuthor(data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, [post.userId]);

  return (
    <div className="post">
      <h3 className="title">{post.title}</h3>
      {author && (
        <p>
          By <span className="tagline">{author.name}</span>{" "}
        </p>
      )}
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
