import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./css/AuthStyles.css"; // Ensure this path is correct

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const res = await axios.post("http://localhost:9001/login", { email, password });
        console.log(res.data);  // Log the response
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          navigate("/dashboard");
        } else {
          alert("Login failed");
        }
      } catch (err) {
        console.error("Error during login:", err);
        alert("Invalid credentials");
      }
      

    try {
      const res = await axios.post("http://localhost:9001/login", { email, password });

      // On success, store token and navigate
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");  // Navigate to dashboard or another page after successful login

    } catch (err) {
      console.error(err);
      alert("Invalid credentials");
    }
  };
  

  return (
    <div className="form-container" style={{ minHeight: "90vh" }}>
      <form onSubmit={handleSubmit}>
        <h4 className="title">LOGIN FORM</h4>

        <div className="mb-3">
          <input
            type="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            placeholder="Enter Your Email"
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            placeholder="Enter Your Password"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          LOGIN
        </button>

        {/* Test button to navigate manually */}
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => navigate("/dashboard")}
        >
          Go to Dashboard (Test)
        </button>
      </form>
    </div>
  );
};

export default Login;
