import React, { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import "./index.css";

const UserProfile = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <>
      <div className="profile-container">
        {user && (
          <div className="profile">
            <h3>User Profile</h3>
            <p>Username: {user.username}</p>
            <p>Name: {user.name}</p>
          </div>
        )}
        <div
        //   style={{ height: "22px" }}
        >
          <Button type="secondary" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
