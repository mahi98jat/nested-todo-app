import React, { useContext, useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import UserProfile from "./UserProfile";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import Todos from "./Todos";
import "./DashboardPage.css";

const DashboardPage: React.FC = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    // Check if the user is authenticated
    validateAuthentication();
  }, []);

  const validateAuthentication = () => {
    const jsonUser = localStorage.getItem("user");
    if (jsonUser) {
      const user = JSON.parse(jsonUser);
      login(user.username, user.password);
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  };

  return (
    <>
      {!isAuthenticated ? (
        <h2>You are not authorized</h2>
      ) : (
        <div
          style={{ paddingInline: "10px", height: "100vh", overflow: "hidden" }}
        >
          <h2>Dashboard</h2>
          <UserProfile />
          <div className="todos-container">
            <Todos />
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardPage;
