// AdminSignUp.js
import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function AdminSignUp() {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    secretKey: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://placement-p2k8.onrender.com/api/admin/register', formData);
      console.log(response.data.message);
      alert('Sign Up successfully!');
      history.push('/admin/signin');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Secret Key"
          name="secretKey"
          value={formData.secretKey}
          onChange={handleInputChange}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default AdminSignUp;
