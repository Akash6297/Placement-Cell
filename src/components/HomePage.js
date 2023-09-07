/* eslint-disable jsx-a11y/img-redundant-alt */


import React   from 'react';
import Contact from './Contact';
import Notice from './Notice';
import '../css/Home.css'; // Import the styles.css file
import Image4 from '../images/4.jpg'; // Import your image file
import Image1 from '../images/3.jpg'; // Import your image file
import Image2 from '../images/2.jpeg'; // Import your image file
import Image3 from '../images/1.jpeg'; // Import your image file
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from 'react-responsive-carousel'; 
const HomePage = () => {


  return (
    <div className="container">
      <h1 className='heading'>
        WELCOME TO RKMGEC PLACEMENT WEBSITE
      </h1>
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
          
          <Notice/>
        </div>
        
        <center><h2>Contact Us</h2></center>
        <div className="contact-us">
        <Contact />
      </div>
      </div>
      <p>
        
      </p>
    </div>
  );
};

export default HomePage;
