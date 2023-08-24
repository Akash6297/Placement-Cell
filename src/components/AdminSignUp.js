// AdminSignUp.js
import React, { useState } from 'react';
import axios from 'axios';

function AdminSignUp() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    secretKey: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/admin/register', formData);
      console.log(response.data.message);
      // Handle successful registration, e.g., redirect to a success page
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  return (
    <div className="contact-container">
      <h2>Admin Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <input
          type="text"
          placeholder="Secret Key"
          name="secretKey"
          value={formData.secretKey}
          onChange={(e) => setFormData({ ...formData, secretKey: e.target.value })}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default AdminSignUp;
