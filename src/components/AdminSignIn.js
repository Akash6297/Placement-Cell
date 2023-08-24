// AdminSignIn.js
import React, { useState } from 'react';
import axios from 'axios';

function AdminSignIn() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/admin/login', formData);
      console.log(response.data.message);
      // Handle successful login, e.g., redirect to the admin panel
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  return (
    <div className="contact-container">
      <h2>Admin Sign In</h2>
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
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default AdminSignIn;
