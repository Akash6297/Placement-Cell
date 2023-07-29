import React from 'react';
import '../styles.css';

const AdminSignIn = ({ handleAdminSignin, adminSigninData, setAdminSigninData }) => {
  return (
    <div className="container">
      <h2>Admin Sign In</h2>
      <form onSubmit={handleAdminSignin}>
        <input type="email" placeholder="Email" value={adminSigninData.email} onChange={(e) => setAdminSigninData({ ...adminSigninData, email: e.target.value })} required />
        <input type="password" placeholder="Password" value={adminSigninData.password} onChange={(e) => setAdminSigninData({ ...adminSigninData, password: e.target.value })} required />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default AdminSignIn;
