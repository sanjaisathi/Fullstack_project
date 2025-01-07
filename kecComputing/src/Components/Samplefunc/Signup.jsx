import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./css/AuthStyles.css";  // Ensure the path is correct

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:9001/signup", { name, email, password, phoneNumber: phone });
      
      alert("Signup successful!");
      navigate("/login");  // This should navigate to the login page

    } catch (err) {
      console.error(err);
      alert("Error during signup");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-footer">
            <button type="submit" className="submit-btn">
              Sign Up
            </button>
            <div className="form-footer-links">
              <span>Already have an account?</span>
              <button
                type="button"
                className="login-btn"
                onClick={() => navigate("/login")}  // This should navigate to /login page
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
