import React from 'react';
import '../styles.css';

const StudentSignUp = ({ handleStudentSignup, studentSignupData, setStudentSignupData }) => {
  return (
    <div className="container">
      <h2>Student Sign Up</h2>
      <form onSubmit={handleStudentSignup}>
        <input type="text" placeholder="Roll Number" value={studentSignupData.rollNumber} onChange={(e) => setStudentSignupData({ ...studentSignupData, rollNumber: e.target.value })} required />
        <input type="text" placeholder="Name" value={studentSignupData.name} onChange={(e) => setStudentSignupData({ ...studentSignupData, name: e.target.value })} required />
        <input type="email" placeholder="Email" value={studentSignupData.email} onChange={(e) => setStudentSignupData({ ...studentSignupData, email: e.target.value })} required />
        <input type="password" placeholder="Password" value={studentSignupData.password} onChange={(e) => setStudentSignupData({ ...studentSignupData, password: e.target.value })} required />
        <input type="password" placeholder="Retype Password" value={studentSignupData.retypePassword} onChange={(e) => setStudentSignupData({ ...studentSignupData, retypePassword: e.target.value })} required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default StudentSignUp;
