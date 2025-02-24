import React from "react";

const Home = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "space-around",
    padding: "20px",
  };

  const postStyle = {
    width: "45%",
    padding: "15px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    marginBottom: "15px",
  };

  const buttonStyle = {
    marginRight: "10px",
    padding: "5px 10px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#3498DB",
    color: "white",
    borderRadius: "5px",
  };

  return (
    <div style={containerStyle}>
      <div style={{ width: "60%" }}>
        <h2>Posts</h2>
        <div style={postStyle}>
          <p>
            <strong>Username | Domain | Occupation</strong>
          </p>
          <p>POST POSTED BY USER (Pic, Video, or Text)</p>
          <button style={buttonStyle}>Upvote</button>
          <button style={buttonStyle}>DM User</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
