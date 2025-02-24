import React from "react";
import aboutImage from "../assets/about.jpg"; // Ensure the correct path

const AboutUs = () => {
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "1200px",
    margin: "auto",
    padding: "25px",
    height: "90vh", // Almost full-page height
  };

  const contentStyle = {
    flex: 1,
    textAlign: "left",
    paddingRight: "40px", // Space between text and image
    marginLeft: "-50px", // Shifting content slightly to the left
  };

  const headingStyle = {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "15px",
    color: "#2C3E50",
  };

  const paragraphStyle = {
    fontSize: "18px",
    color: "#555",
    lineHeight: "1.8",
  };

  const teamSectionStyle = {
    marginTop: "20px",
  };

  const teamMemberStyle = {
    display: "inline-block",
    margin: "10px",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "12px",
    width: "100px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    boxShadow: "2px 4px 10px rgba(0, 0, 0, 0.1)", // Soft shadow
  };

  const imageContainerStyle = {
    flex: 1.5, // Increased the image flex ratio for a bigger image
    display: "flex",
    justifyContent: "center",
  };

  const imageStyle = {
    width: "100%", // Increased width further
    height: "auto",
    objectFit: "cover",
    borderRadius: "15px", // Smooth rounded corners
    boxShadow: "4px 6px 12px rgba(0, 0, 0, 0.2)", // Depth effect
  };

  return (
    <div style={containerStyle}>
      {/* Left Side - Content */}
      <div style={contentStyle}>
        <h2 style={headingStyle}>About Pitchwave</h2>
        <p style={paragraphStyle}>
          Welcome to <strong>Pitchwave</strong>, your go-to platform for
          connecting startups and investors. Our mission is to bridge the gap
          between entrepreneurs and investors by providing an interactive space
          to showcase innovative ideas, network with potential backers, and
          bring visions to life. We aim to create an ecosystem where startups
          can flourish by gaining exposure, validation, and funding. Whether
          you're an entrepreneur looking for investors or an investor searching
          for promising ideas, Pitchwave is designed to make the connection
          seamless and efficient.
        </p>

        {/* Team Section */}
        <div style={teamSectionStyle}>
          <h3 style={{ ...headingStyle, fontSize: "24px" }}>Meet Our Team</h3>
          <div style={teamMemberStyle}>
            <p>
              <strong>Rupam S.</strong>
            </p>
            <p>Founder & CEO</p>
          </div>
          <div style={teamMemberStyle}>
            <p>
              <strong>John Doe</strong>
            </p>
            <p>CTO & Lead Developer</p>
          </div>
          <div style={teamMemberStyle}>
            <p>
              <strong>Jane Smith</strong>
            </p>
            <p>Marketing Head</p>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div style={imageContainerStyle}>
        <img src={aboutImage} alt="Pitchwave Team" style={imageStyle} />
      </div>
    </div>
  );
};

export default AboutUs;
