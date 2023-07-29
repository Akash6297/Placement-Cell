import React from 'react';
import '../css/popup.css';
import { Link } from 'react-router-dom';

const SignInPopup = ({ onClose }) => {
  const handleStudentSignIn = () => {
    // Handle student sign in logic here (e.g., redirect to /student/signin)
    onClose(); // Close the popup after handling the action
  };

  const handleAdminSignIn = () => {
    // Handle admin sign in logic here (e.g., redirect to /admin/signin)
    onClose(); // Close the popup after handling the action
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Sign In</h2>
        <div className="signin-options">
          <Link to="/student/signin">
            <button onClick={handleStudentSignIn}>Sign up as STUDENT</button>
          </Link>
          <Link to="/admin/signin">
            <button onClick={handleAdminSignIn}>Sign up as ADMIN</button>
          </Link>

        </div>
        {/* <button className="close-btn" onClick={onClose}>Close</button> */}
      </div>
    </div>
  );
};

export default SignInPopup;
