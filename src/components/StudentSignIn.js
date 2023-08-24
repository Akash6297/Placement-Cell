import React, { useState } from 'react';
import '../css/Contact.css';
function StudentSignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://placement-p2k8.onrender.com/api/student/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful sign-in (e.g., redirect to dashboard)
        // You can also set a state variable to show a success message.
      } else {
        // Handle sign-in error (e.g., show error message)
      }
    } catch (error) {
      // Handle network or other errors
    }
  };

  return (
    <div className="contact-container">
      <h2>Student Sign In</h2>
      <form onSubmit={handleSubmit} className="form-group">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default StudentSignIn;
