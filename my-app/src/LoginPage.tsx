import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import Button from "./Button/Button";
import Input from "./Input/Input";

import "./LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const success = login(username, password);
    if (success) {
      navigate("/dashboard");
    } else {
      setIsError(true);
    }
  };
  return (
    <div className="login-page">
      <h2>Welcome to Todo App</h2>
      <form className="form">
        <Input
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />

        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        {isError && (
          <span className="error-text">Wrong username and password</span>
        )}
        <Button type="primary" onClick={handleSubmit}>
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
