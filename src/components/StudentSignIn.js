// src/components/StudentSignin.js

import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import '../css/signup.css';
import { useHistory } from 'react-router-dom';

const StudentSignin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the form data to the server for student sign-in here
      // You should make an HTTP POST request to your backend API endpoint
      const response = await axios.post('http://localhost:5000/api/student/signin', formData);
      console.log('Student sign-in successful:', response.data);
      history.push('/student/panel');
      // You can handle the response as needed, such as redirecting to a dashboard
    } catch (error) {
      console.error('Student sign-in error:', error);
      // Handle sign-in errors, such as displaying an error message to the user
    }
  };

  return (
    <div className="signup-container">
      <h2>Student Signin</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default StudentSignin;
