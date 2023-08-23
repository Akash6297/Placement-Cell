/* eslint-disable jsx-a11y/img-redundant-alt */
// import React, { useState } from 'react';
// import axios from 'axios';
// import '../css/about.css'; // Import the CSS file for the about page styles

// const About = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [submitMessage, setSubmitMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('https://placement-p2k8.onrender.com/api/contact', formData);
//       console.log(response.data);
//       setSubmitMessage('Your message has been submitted. We will get back to you soon.');
//     } catch (error) {
//       console.error('Error submitting the contact form:', error);
//       setSubmitMessage('Oops! Something went wrong. Please try again later.');
//     }
//   };

//   return (
//     <div>
//       <div className="about-section">
//         <h2>About Page</h2>
//         <p>This is the About page content.</p>
//       </div>
//       <div className="contact-section">
//         <h3>Contact Us</h3>
//         <form className="contact-form" onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="name">Name:</label>
//             <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
//           </div>
//           <div>
//             <label htmlFor="email">Email:</label>
//             <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
//           </div>
//           <div>
//             <label htmlFor="message">Message:</label>
//             <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
//           </div>
//           <button type="submit">Submit</button>
//         </form>
//         {submitMessage && <p>{submitMessage}</p>}
//       </div>
//     </div>
//   );
// };

// export default About;


import React from 'react';
import '../css/about.css'; // Import the CSS file for the about page styles
import Image from '../images/a.png';
const About = () => {
  return (
    <div>
      <div className="about-section">
        <h2>WHY RKMGEC Placement Cell?</h2>
        <p>
          This is a demo answer explaining why RKMGEC Placement Cell is the right choice for you.
        </p>
      </div>
      <hr /> {/* Horizontal Line */}
      <div className="process-section">
        <h2>PROCESS</h2>
        <p>
          Here, you can describe the placement process at RKMGEC Placement Cell.
        </p>
      </div>
      <hr /> {/* Horizontal Line */}
      <center><h2>CREATED/MAINTAINED BY</h2></center>
      <div className="creator-section">
        
        <div className="creator">
          <img src={Image} alt="Image of the Person" />
          <div className="creator-info">
            <p>Akash Mandal</p>
            <p>Software Developer</p>
            <p>DEPT: ECE</p>
            <p>ROLL NO: 35000320032</p>
            <a href="https://akash6297.github.io/Akash-Mandal/">More</a>
          </div>
        </div>
        <div className="creator">
          <img src={Image} alt="Image of the Person" />
          <div className="creator-info">
            <p>Shweta Paramanik</p>
            <p>Software Developer</p>
            <p>DEPT: CSE</p>
            <p>ROLL NO: 35000120046</p>
            <a href="https://sites.google.com/view/shwetapramanik">More</a>
          </div>
        </div>
        <div className="creator">
          <img src={Image} alt="Image of the Person" />
          <div className="creator-info">
            <p>Sayandip Dutta</p>
            <p>Software Developer</p>
            <a href="https://akash6297.github.io/Akash-Mandal/">More</a>
          </div>
        </div>
        <div className="creator">
          <img src={Image} alt="Image of the Person" />
          <div className="creator-info">
            <p>Gobindo </p>
            <p>Software Developer</p>
            <a href="https://akash6297.github.io/Akash-Mandal/">More</a>
          </div>
        </div>
        <div className="creator">
          <img src={Image} alt="Image of the Person" />
          <div className="creator-info">
            <p>Joydeep Das</p>
            <p>Software Developer</p>
            <a href="https://akash6297.github.io/Akash-Mandal/">More</a>
          </div>
        </div>
        <div className="creator">
          <img src={Image} alt="Image of the Person" />
          <div className="creator-info">
            <p>Souvik Ghosh</p>
            <p>Software Developer</p>
            <a href="https://akash6297.github.io/Akash-Mandal/">More</a>
          </div>
        </div>
        <div className="creator">
          <img src={Image} alt="Image of the Person" />
          <div className="creator-info">
            <p>Shourdha Patihar</p>
            <p>Software Developer</p>
            <a href="https://akash6297.github.io/Akash-Mandal/">More</a>
          </div>
        </div>
        <div className="creator">
          <img src={Image} alt="Image of the Person" />
          <div className="creator-info">
            <p>Arbaz Ansary</p>
            <p>Software Developer</p>
            <a href="https://akash6297.github.io/Akash-Mandal/">More</a>
          </div>
        </div>
        <div className="creator">
          <img src={Image} alt="Image of the Person" />
          <div className="creator-info">
            <p>Rupak Choudhury</p>
            <p>Software Developer</p>
            <a href="https://akash6297.github.io/Akash-Mandal/">More</a>
          </div>
        </div>
        <div className="creator">
          <img src={Image} alt="Image of the Person" />
          <div className="creator-info">
            <p>Akash Mandal</p>
            <p>Software Developer</p>
            <a href="https://akash6297.github.io/Akash-Mandal/">More</a>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default About;
