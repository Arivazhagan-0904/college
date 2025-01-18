import React, { useState } from "react";
import "./OtpVerification.css";

const OtpVerification = () => {
  const [otp, setOtp] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    // Allow only numeric values and limit the input to 6 digits
    if (/^\d*$/.test(value) && value.length <= 6) {
      setOtp(value);
    }
  };

  const handleSubmit = () => {
    if (otp.length === 6) {
      alert(`Submitted OTP: ${otp}`);
    } else {
      alert("Please enter a valid 6-digit OTP.");
    }
  };

  return (
    <div className="otp-container">
      <div className="otp-image">
        <img
          src="https://your-image-url-here.jpg"
          alt="OTP Verification"
        />
      </div>
      <div className="otp-form">
        <h2>OTP Verification</h2>
        <p>
          Enter OTP Code sent to <strong>+880********42</strong>
        </p>
        <input
          type="text"
          value={otp}
          onChange={handleChange}
          placeholder="Enter OTP"
          className="otp-input"
        />
        <p>
          Didn’t receive OTP code? <a href="#resend">Resend Code</a>
        </p>
        <button onClick={handleSubmit}>Verify & Proceed</button>
      </div>
    </div>
  );
};

export default OtpVerification;
