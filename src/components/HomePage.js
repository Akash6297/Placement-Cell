/* eslint-disable jsx-a11y/img-redundant-alt */


import React from 'react';
import '../css/Home.css'; // Import the styles.css file
import Image1 from '../images/1.jpeg'; // Import your image file
import Image2 from '../images/2.jpeg'; // Import your image file
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from 'react-responsive-carousel'; 
const HomePage = () => {
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
        
        {/* Add more images here */}
      </Carousel>
      <div className="content">
        <div className="notice-board">
          <h2>Notice Board</h2>
          <ul>
            <li>Important Announcement 1</li>
            <li>Important Announcement 2</li>
            <li>Important Announcement 3</li>
          </ul>
        </div>
        <div className="contact-us">
          <h2>Contact Us</h2>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
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
