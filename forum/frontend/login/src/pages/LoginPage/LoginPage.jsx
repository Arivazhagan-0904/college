import React, { useState } from 'react';
import "./LoginPage.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false); // Added state for password visibility

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible); // Toggle password visibility
  };

  return (
    <div className="login-containers">
      <div className="login-box">
        <h1 className="login-title">Login</h1>
        <form>
          <div className="input-group">
            <input type="text" placeholder='UserName' className="input-field" />
            <span className="icon">&#128100;</span>
          </div>
          <div className="input-group">
            {/* Modified password input field to toggle visibility */}
            <input
              type={passwordVisible ? "text" : "password"} // Toggle input type between text and password
              placeholder='Password'
              className='input-field'
            />
            <span
              className="icon"
              onClick={togglePasswordVisibility} // Add click event to toggle visibility
              style={{ cursor: "pointer" }}
            >
              {passwordVisible ? "🙈" : "👁️"} {/* Change icon based on visibility */}
            </span>
          </div>
          <div className="forgot-password">
            <a href="#"><Link to="/ForgotPassword">Forgot Password?</Link></a>
          </div>
          <Link to="/HomePage">
            <button type="submit" className="login-button">
              <Link to="/HomePage">LOGIN</Link>
            </button>
          </Link>
        </form>
        {/* Added the 'Don't have an account? Register' section */}
        <div className="register-link">
          <p>
            Don't have an account? <a href="#"><Link to="/RegisterPage">Register</Link></a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
