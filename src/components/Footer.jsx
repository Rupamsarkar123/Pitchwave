import React from "react";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#2C3E50",
    color: "white",
    textAlign: "center",
    padding: "10px 15px",
    position: "fixed",
    bottom: "0",
    left: "0",
    width: "100%",
    borderRadius: "4px",
    //height: "29px", // Increased height
  };

  return (
    <footer style={footerStyle}>
      <p>© {new Date().getFullYear()} Pitchwave. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
