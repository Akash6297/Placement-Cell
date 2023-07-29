import React from 'react';
import '../css/popup.css';
import { Link } from 'react-router-dom';


const SignUpPopup = ({ onClose }) => {
  const handleStudentSignUp = () => {
    // Handle student sign up logic here (e.g., redirect to /student/signup)
    onClose(); // Close the popup after handling the action
  };

  const handleAdminSignUp = () => {
    // Handle admin sign up logic here (e.g., redirect to /admin/signup)
    onClose(); // Close the popup after handling the action
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Sign Up</h2>
        <div className="signup-options">
          <Link to="/student/signup">
            <button onClick={handleStudentSignUp}>Sign up as STUDENT</button>
          </Link>
          <Link to="/admin/signup">
            <button onClick={handleAdminSignUp}>Sign up as ADMIN</button>
          </Link>
        </div>
        {/* <button className="close-btn" onClick={onClose}>Close</button> */}
      </div>
    </div>
  );
};

export default SignUpPopup;
