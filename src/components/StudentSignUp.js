import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import '../css/signup.css';
import { useHistory } from 'react-router-dom';

const StudentSignup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the form data to the server for student registration here
      // You should make an HTTP POST request to your backend API endpoint
      const response = await axios.post('http://localhost:5000/api/student/signup', formData);
      console.log('Student registration successful:', response.data);
      setSuccessMessage('Successfully Signed Up');
      history.push('/student/signin');
      // You can handle the response as needed, such as redirecting to a login page
    } catch (error) {
      console.error('Student registration error:', error);
      // Handle registration errors, such as displaying an error message to the user
    }
  };

  return (
    <div className="signup-container">
    <h2>Student Signup</h2>
    {successMessage && <div className="success-message">{successMessage}</div>}
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
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
      <button type="submit">Sign Up</button>
    </form>
  </div>
  );
};

export default StudentSignup;
