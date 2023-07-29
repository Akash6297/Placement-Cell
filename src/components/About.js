import React, { useState } from 'react';
import axios from 'axios';
import '../css/about.css'; // Import the CSS file for the about page styles

const About = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://placement-p2k8.onrender.com/api/contact', formData);
      console.log(response.data);
      setSubmitMessage('Your message has been submitted. We will get back to you soon.');
    } catch (error) {
      console.error('Error submitting the contact form:', error);
      setSubmitMessage('Oops! Something went wrong. Please try again later.');
    }
  };

  return (
    <div>
      <div className="about-section">
        <h2>About Page</h2>
        <p>This is the About page content.</p>
      </div>
      <div className="contact-section">
        <h3>Contact Us</h3>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
          </div>
          <button type="submit">Submit</button>
        </form>
        {submitMessage && <p>{submitMessage}</p>}
      </div>
    </div>
  );
};

export default About;
