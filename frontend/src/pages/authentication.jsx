import React, { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import "./AuthStyles.css";

export default function Authentication() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [formState, setFormState] = useState(0); // 0 = login, 1 = register

  const { handleRegister, handleLogin } = useContext(AuthContext);

  const handleAuth = async () => {
    setError("");
    setMessage("");
    try {
      if (formState === 0) {
        await handleLogin(username, password);
      } else {
        const result = await handleRegister(name, username, password);
        setMessage(result);
        setUsername("");
        setName("");
        setPassword("");
        setFormState(0);
      }
    } catch (err) {
      setError(
        err?.response?.data?.message || err?.message || "Something went wrong."
      );
    }
  };

  return (
    <div className="auth-container fancy">
      <div className="auth-card fancy-card">
        <div className="toggle-wrapper">
          <div
            className="toggle-highlight"
            style={{ left: formState === 0 ? "0%" : "50%" }}
          />
          <button
            className={formState === 0 ? "active" : ""}
            onClick={() => setFormState(0)}
          >
            Sign In
          </button>
          <button
            className={formState === 1 ? "active" : ""}
            onClick={() => setFormState(1)}
          >
            Sign Up
          </button>
        </div>

        <h2>
          {formState === 0 ? "Sign in to your account" : "Create a new account"}
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAuth();
          }}
        >
          {formState === 1 && (
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className="error">{error}</p>}
          {message && <p className="success">{message}</p>}

          <button type="submit" className="submit-btn">
            {formState === 0 ? "Login" : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
}
