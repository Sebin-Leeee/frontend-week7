import React, { useState, useEffect } from "react";
import Post from "./Post";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => {
          setPosts(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching posts:", error);
          setIsLoading(false);
        });
    }, 2500);
  }, []);

  return (
    <div className="post-list">
      <h1>Recent Posts</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        posts.map((post) => <Post key={post.id} post={post} />)
      )}
    </div>
  );
};

export default PostList;
