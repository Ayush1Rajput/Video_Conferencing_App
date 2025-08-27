import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import "./AuthStyles.css";

export default function Authentication() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [formState, setFormState] = useState(0); // 0 = login, 1 = register
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode

  const { handleRegister, handleLogin } = useContext(AuthContext);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

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
    <div className={`auth-container fancy ${darkMode ? "dark" : "light"}`}>
      <div className="auth-card fancy-card">
        <div className="mode-toggle">
          <input
            type="checkbox"
            id="mode-switch"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <label htmlFor="mode-switch" className="toggle-label">
            <span className="sun">☀️</span>
            <span className="moon">🌙</span>
            <div className="toggle-ball"></div>
          </label>
        </div>

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
