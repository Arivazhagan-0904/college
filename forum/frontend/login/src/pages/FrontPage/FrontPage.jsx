import React from 'react';
import "./FrontPage.css";
import {Link} from "react-router-dom";



const FrontPage = () => {
  return(
    <div className="login-page">
      <div className="background-image">
        <div className = "login-container">
          <h1>
            LOGIN
          </h1>
          <div className="options">
            <div className="option">
              <img src="./student-icon.jpg" alt="Teacher" className="option-icon"/>
              <button className="option-button">
                <Link to="/LoginPage">TEACHER</Link></button>
            </div>
            <div className="or-text">OR</div>
            <div className="option">
              <img src=" " alt="Student" className="option-icon"/>
              <button className="option-button">
                <Link to="/LoginPage">STUDENT</Link></button>
            </div>
          </div>
            
        </div>
      </div>
      
    </div>
  

  );
  
  
  
  
}

export default FrontPage