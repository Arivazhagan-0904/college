import React, { useState } from "react";
import "./OtpVerification.css";

const OtpVerification = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const handleSubmit = () => {
    alert(`Submitted OTP: ${otp.join("")}`);
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
        <div className="otp-inputs">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
            />
          ))}
        </div>
        <p>
          Didn’t receive OTP code? <a href="#resend">Resend Code</a>
        </p>
        <button onClick={handleSubmit}>Verify & Proceed</button>
      </div>
    </div>
  );
};

export default OtpVerification;
