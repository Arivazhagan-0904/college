import React from 'react'
import "./ForgotPassword.css"
import {Link} from 'react-router-dom'

const ForgotPassword = () => {
  return (
    <div className="forgot-password-container">
      <div className="forgot-password-card">
        <img src="https://i.pinimg.com/736x/5a/f2/8a/5af28ad0a4feee85bb9038e64ee2455f.jpg"
        alt="Forgot Password Illustration"
        className="forgot-password-image"/>
        <h2>Forgot-password?</h2>
        <p>
          Please enter  your registered email address.We will you the password reset OTP. 
        </p>
        <form className="forgot-password-form">
          <div className="input-group">
            <label htmlFor='email'>
              <i className="email-icon">✉️</i>
            </label>
            <input type="email" id="email" placeholder='Enter Email' required/>

          </div>
          <button type="submit" className="submit-btn"><Link to="/OtpVerification">Submit</Link></button>

        </form>

      </div>
    </div>
  )
}

export default ForgotPassword