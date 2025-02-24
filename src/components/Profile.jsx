import React from "react";

const Profile = () => {
  const profileStyle = {
    width: "40%",
    margin: "auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    textAlign: "center",
  };

  return (
    <div style={profileStyle}>
      <h2>My Profile</h2>
      <p>
        <strong>Name:</strong> My Name
      </p>
      <p>
        <strong>Email:</strong> myemail@example.com
      </p>
      <p>
        <strong>Domain:</strong> Selected Domain
      </p>
      <p>
        <strong>Occupation:</strong> Selected Occupation
      </p>
    </div>
  );
};

export default Profile;
