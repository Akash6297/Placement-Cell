import React from 'react';
import '../styles.css';

const AdminSignUp = ({ handleAdminSignup, adminSignupData, setAdminSignupData }) => {
  return (
    <div className="container">
      <h2>Admin Sign Up</h2>
      <form onSubmit={handleAdminSignup}>
        <input type="text" placeholder="Secret Key" value={adminSignupData.secretKey} onChange={(e) => setAdminSignupData({ ...adminSignupData, secretKey: e.target.value })} required />
        <input type="text" placeholder="Name" value={adminSignupData.name} onChange={(e) => setAdminSignupData({ ...adminSignupData, name: e.target.value })} required />
        <input type="email" placeholder="Email" value={adminSignupData.email} onChange={(e) => setAdminSignupData({ ...adminSignupData, email: e.target.value })} required />
        <input type="password" placeholder="Password" value={adminSignupData.password} onChange={(e) => setAdminSignupData({ ...adminSignupData, password: e.target.value })} required />
        <input type="password" placeholder="Retype Password" value={adminSignupData.retypePassword} onChange={(e) => setAdminSignupData({ ...adminSignupData, retypePassword: e.target.value })} required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default AdminSignUp;
