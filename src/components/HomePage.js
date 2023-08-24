/* eslint-disable jsx-a11y/img-redundant-alt */


import React, { useState }  from 'react';
import Axios from 'axios';
import '../css/Home.css'; // Import the styles.css file
import Image4 from '../images/4.jpg'; // Import your image file
import Image1 from '../images/3.jpg'; // Import your image file
import Image2 from '../images/2.jpeg'; // Import your image file
import Image3 from '../images/1.jpeg'; // Import your image file
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from 'react-responsive-carousel'; 
const HomePage = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Send a POST request to your backend with the form data
      const response = await Axios.post('https://placement-p2k8.onrender.com/api/contact', formData);
      console.log(response.data); // Log the response from the server
      // Optionally, you can reset the form here
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error(error);
      // Handle any errors that occur during the request
    }
  };
  return (
    <div className="container">
      <h1>WELCOME TO RKMGEC PLACEMENT WEBSITE</h1>
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        <div>
          <img src={Image1} alt="Image Description 1" />
        </div>
        <div>
          <img src={Image2} alt="Image Description 1" />
        </div>
        <div>
          <img src={Image3} alt="Image Description 1" />
        </div>
        <div>
          <img src={Image4} alt="Image Description 1" />
        </div>
        
        {/* Add more images here */}
      </Carousel>

      <center><h2>Notice Board</h2></center>
      <div className="content">
      
        <div className="notice-board">
          
          <ul>
            <li>New Announcement 1</li>
            <li>New Announcement 2</li>
            <li>New Announcement 3</li>
          </ul>
        </div>
        
        <center><h2>Contact Us</h2></center>
        <div className="contact-us">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
      </div>
      <p>
        
      </p>
    </div>
  );
};

export default HomePage;
