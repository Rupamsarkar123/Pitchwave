import React, { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    if (loggedInUser) setUser(loggedInUser);
  }, []);

  if (!user) return <h2 style={{ textAlign: "center" }}>User not logged in</h2>;

  return (
    <div style={profileStyle}>
      <h2>My Profile</h2>
      {user.profilePic && (
        <img
          src={`http://localhost:5000${user.profilePic}`}
          alt="Profile"
          style={profilePicStyle}
        />
      )}
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Domain:</strong> {user.domain}
      </p>
      <p>
        <strong>Occupation:</strong> {user.occupation}
      </p>
    </div>
  );
};

const profileStyle = {
  width: "40%",
  margin: "auto",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "10px",
  textAlign: "center",
};

const profilePicStyle = {
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  objectFit: "cover",
};

export default Profile;
