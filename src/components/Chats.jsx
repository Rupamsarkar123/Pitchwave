import React from "react";

const Chats = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "60vh", // Reduced height to move it up
    textAlign: "center",
    marginTop: "30px", // Moves the chat section up
  };

  const chatBoxStyle = {
    width: "60%",
    maxWidth: "400px",
    backgroundColor: "#f4f4f4",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  };

  const chatStyle = {
    padding: "10px",
    margin: "8px",
    backgroundColor: "#ffffff",
    borderRadius: "5px",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
    width: "91%",
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ marginBottom: "20px", color: "#2C3E50" }}>My Chats</h2>
      <div style={chatBoxStyle}>
        <div style={chatStyle}>User 1: Last Message</div>
        <div style={chatStyle}>User 2: Last Message</div>
        <div style={chatStyle}>User 3: Last Message</div>
      </div>
    </div>
  );
};

export default Chats;
