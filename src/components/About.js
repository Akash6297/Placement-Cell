/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import '../css/about.css'; // Import the CSS file for the about page styles
import Image1 from '../images/webp/Akash.webp';
import Image2 from '../images/webp/Shweta.webp';
import Image3 from '../images/webp/Rupak.webp';
import Image4 from '../images/webp/Gobinda.webp';
import Image5 from '../images/webp/Akash.webp';
import Image6 from '../images/webp/Joydeep.webp';
import Image7 from '../images/webp/Souvik.jpg';
import Image8 from '../images/webp/Shourdha.webp';
import Image9 from '../images/webp/Akash.webp';
import Image10 from '../images/webp/Akash.webp';
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
          <img src={Image1} alt="Image of the Person" />
          <div className="creator-info">
            <p>Akash Mandal</p>
            <p>Software Developer</p>
            <p>Dept: ECE</p>
            <p>Roll No: 35000320032</p>
            <a href="https://akash6297.github.io/Akash-Mandal/">More</a>
          </div>
        </div>
        <div className="creator">
          <img src={Image2} alt="Image of the Person" />
          <div className="creator-info">
            <p>Shweta Paramanik</p>
            <p>Software Developer</p>
            <p>Dept: CSE</p>
            <p>Roll No: 35000120046</p>
            <a href="https://sites.google.com/view/shwetapramanik">More</a>
          </div>
        </div>
        <div className="creator">
          <img src={Image5} alt="Image of the Person" />
          <div className="creator-info">
            <p>Sayandip Dutta</p>
            <p>Software Developer</p>
            <p>Dept: ECE</p>
            <p>Roll No: 35000320026</p>
            <a href="https://akash6297.github.io/Akash-Mandal/">More</a>
          </div>
        </div>
        <div className="creator">
          <img src={Image4} alt="Image of the Person" />
          <div className="creator-info">
            <p>Gobinda Gorai </p>
            <p>Software Developer</p>
            <p>Dept: CE</p>
            <p>Roll No: 335001320042</p>
            <a href="http://ekchokho.com">More</a>
          </div>
        </div>
        <div className="creator">
          <img src={Image6} alt="Image of the Person" />
          <div className="creator-info">
            <p>JOYDEEP DAS</p>
            <p>Software Developer</p>
            <p>Dept: ECE</p>
            <p>Roll No: 35000320020</p>
            <a href="https://akash6297.github.io/Akash-Mandal/">More</a>
          </div>
        </div>
        <div className="creator">
          <img src={Image7} alt="Image of the Person" />
          <div className="creator-info">
            <p>Souvik Ghosh</p>
            <p>Software Developer</p>
            <p>Dept: ECE</p>
            <p>Roll No: 35001620059</p>
            <a href="https://akash6297.github.io/Akash-Mandal/">More</a>
          </div>
        </div>
        <div className="creator">
          <img src={Image8} alt="Image of the Person" />
          <div className="creator-info">
            <p>Sauhardya Patihar</p>
            <p>Software Developer</p>
            <p>Dept: ECE</p>
            <p>Roll No: 35000320027</p>
            <a href="https://akash6297.github.io/Akash-Mandal/">More</a>
          </div>
        </div>
        <div className="creator">
          <img src={Image9} alt="Image of the Person" />
          <div className="creator-info">
            <p>Arbaz Ansary</p>
            <p>Software Developer</p>
            <p>Dept: ECE</p>
            <p>Roll No: 35000320032</p>
            <a href="https://akash6297.github.io/Akash-Mandal/">More</a>
          </div>
        </div>
        <div className="creator">
          <img src={Image3} alt="Image of the Person" />
          <div className="creator-info">
            <p>Rupak Choudhury</p>
            <p>Software Developer</p>
            <p>Dept: ECE</p>
            <p>Roll No: 35000320013</p>
            <a href="https://akash6297.github.io/Akash-Mandal/">More</a>
          </div>
        </div>
        <div className="creator">
          <img src={Image10} alt="Image of the Person" />
          <div className="creator-info">
            <p>Akash Mandal</p>
            <p>Software Developer</p>
            <p>Dept: ECE</p>
            <p>Roll No: 35000320032</p>
            <a href="https://akash6297.github.io/Akash-Mandal/">More</a>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default About;
