// AdminSignIn.js
import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function AdminSignIn() {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://placement-p2k8.onrender.com/api/admin/login', formData);
      console.log(response.data.message); // Check the response message
      alert('Sign In successfully!');

      // Check if this log is printed
      console.log('Redirecting to /admin/panel');
      
      history.push('/admin/panel'); // Ensure that this line is executed
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
