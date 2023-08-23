/* eslint-disable jsx-a11y/img-redundant-alt */
// import React from 'react';
// import '../styles.css'; // Import the styles.css file

// const HomePage = () => {
//   return (
//     <div>
//       <h1>Welcome to our Placement Cell Website</h1>
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut libero a justo egestas bibendum eget sit amet sem. Nullam commodo feugiat nunc, eu cursus libero vestibulum vel. Vivamus ut nunc lorem. Suspendisse auctor justo eu ante bibendum fermentum. Quisque nec venenatis tellus. Nullam vel semper dui. Nulla ac nunc tortor. Duis ultrices lorem sit amet purus ultrices, sit amet posuere metus tincidunt.
//       </p>
//       <p>
//         Phasellus nec tristique lectus. Integer id turpis libero. Nunc ut tortor semper, egestas nulla vel, bibendum est. Duis faucibus tristique ex, vitae euismod orci mattis vel. Integer a lorem felis. Etiam vitae ex quis risus elementum tincidunt vel ut sapien. Vestibulum sagittis augue eget mi dignissim, eu volutpat risus euismod.
//       </p>
//       <h2>About Our Placement Cell</h2>
//       <p>
//         Our Placement Cell is dedicated to helping students achieve their career goals. We work closely with companies to provide excellent job opportunities for our students. Our team of professionals assists students with interview preparation, resume building, and skill development. We aim to connect talented individuals with industry-leading organizations.
//       </p>
//       <h2>Why Choose Our Placement Cell?</h2>
//       <p>
//         There are several reasons why you should choose our Placement Cell:
//       </p>
//       <ul>
//         <li>Wide network of partner companies</li>
//         <li>Expert guidance and support</li>
//         <li>Proven track record of successful placements</li>
//         <li>Opportunities for internships and industrial training</li>
//       </ul>
//       <h2>Get Started Today!</h2>
//       <p>
//         Don't miss out on exciting career opportunities. Join our Placement Cell today and take the first step towards a bright future.
//       </p>
//     </div>
//   );
// };

// export default HomePage;


import React from 'react';
import '../css/Home.css'; // Import the styles.css file
import Image from '../images/1.jpeg'; // Import your image file

const HomePage = () => {
  return (
    <div className="container">
      <h1>WELCOME TO RKMGEC PLACEMENT WEBSITE</h1>
      <img src={Image} alt="Image Description" />
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
