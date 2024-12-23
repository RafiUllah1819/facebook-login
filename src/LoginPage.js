import React, { useState } from "react";
import { url } from "./api";
import axios from "axios";

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  console.log("Backend URL in login file:", url);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${url}`, {
        username,
        password,
      });

      if (response.status === 200) {
        // alert(response.data.message);
        console.log("added");
      } else {
        setError(response.data.error);
      }
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 200
        setError(error.response.data.error || "Something went wrong.");
      } else {
        // Network error or other issues
        setError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="facebook-logo">
          <h1>facebook</h1>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          {error && <p className="error">{error}</p>}
          <div className="input-group">
            <input
              type="text"
              placeholder="Email or Phone"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
          <a href="#" className="signup-link">
            Sign Up for Facebook
          </a>
        </form>
        <div className="help-icon">
          <a href="#">?</a>
        </div>
      </div>
    </div>
  );
};
