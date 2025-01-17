import React,{useState} from 'react'
import "./PasswordValidation.css"

const PasswordValidation = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Sorry, Password don't match");
    } else {
      setError("");
      alert("Password successfully updated!");
      
    }
  };

  return (
    <div className="password-container">
      <div className="password-form">
        <h2>Password Validation</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter new password"
              required
            />
          </div>
          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default PasswordValidation;