import React from "react";

const YourPosts = () => {
  const postContainer = {
    width: "60%",
    margin: "auto",
    padding: "20px",
  };

  const postStyle = {
    padding: "15px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    marginBottom: "15px",
  };

  return (
    <div style={postContainer}>
      <h2>Your Posts</h2>
      <div style={postStyle}>
        <p>
          <strong>Posted by You</strong>
        </p>
        <p>Your post content goes here...</p>
      </div>
    </div>
  );
};

export default YourPosts;
