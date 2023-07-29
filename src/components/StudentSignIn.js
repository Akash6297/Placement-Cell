import React from 'react';
import '../styles.css';

const StudentSignIn = ({ handleStudentSignin, studentSigninData, setStudentSigninData }) => {
  return (
    <div className="container">
      <h2>Student Sign In</h2>
      <form onSubmit={handleStudentSignin}>
        <input type="text" placeholder="Roll Number" value={studentSigninData.rollNumber} onChange={(e) => setStudentSigninData({ ...studentSigninData, rollNumber: e.target.value })} required />
        <input type="password" placeholder="Password" value={studentSigninData.password} onChange={(e) => setStudentSigninData({ ...studentSigninData, password: e.target.value })} required />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default StudentSignIn;
