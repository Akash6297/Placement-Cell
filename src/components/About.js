// /* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import '../css/about.css'; // Import the CSS file for the about page styles
import Image1 from '../images/webp/Akash.webp';
import Image2 from '../images/webp/Shweta.webp';
import Image3 from '../images/webp/Rupak.webp';
import Image4 from '../images/webp/Gobinda.webp';
import Image5 from '../images/Anirbar.png';
import Image6 from '../images/webp/Joydeep.webp';
import Image7 from '../images/webp/Souvik.jpg';
import Image8 from '../images/webp/Shourdha.webp';
import Image9 from '../images/Raju.jpg';
import Image10 from '../images/Arbaz.png';

const About = () => {
  return (
    <div className="container">
      <div className="about-section">
        <h2>Why Choose RKMGEC Placement Cell?</h2>
        <p>
          RKMGEC Placement Cell is your gateway to a successful career. Our dedicated team works tirelessly to connect students with the best job opportunities.
        </p>
      </div>
      <hr /> {/* Horizontal Line */}
      <div className="process-section">
        <h2>Our Placement Process</h2>
        <p>
          Our placement process is designed to provide you with the best opportunities and prepare you for the future.
        </p>
      </div>
      <hr /> {/* Horizontal Line */}
      <h2>Created/Maintained By </h2>
      <div className="creator-section">
      <div className="creator-pair">
        <div className="creator">
          <img src={Image1} alt="Akash Mandal" />
          <div className="creator-info">
            <p>Akash Mandal</p>
            <p>FullStack Developer</p>
            <p>Dept: ECE</p>
            <p>Roll No: 35000320032</p>
            <a href="https://akash6297.github.io/Akash-Mandal/">More</a>
          </div>
        </div>
        <hr/>
        <div className="creator">
          <img src={Image2} alt="Shweta Paramanik" />
          <div className="creator-info">
            <p>Shweta Paramanik</p>
            <p>Software Developer</p>
            <p>Dept: CSE</p>
            <p>Roll No: 35000120046</p>
            <a href="https://sites.google.com/view/shwetapramanik">More</a>
          </div>
        </div>
        </div>
        <hr/>
        <div className="creator-pair">
        <div className="creator">
          <img src={Image3} alt="Shweta Paramanik" />
          <div className="creator-info">
            <p>Rupak Choudhury</p>
            <p>Software Developer</p>
            <p>Dept: ECE</p>
            <p>Roll No: 35000320013</p>
            <a href="https://sites.google.com/view/shwetapramanik">More</a>
          </div>
        </div>
        <hr/>
        <div className="creator">
          <img src={Image4} alt="Shweta Paramanik" />
          <div className="creator-info">
            <p>Gobinda Gorai</p>
            <p>Software Developer</p>
            <p>Dept: CE</p>
            <p>Roll No: 335001320042</p>
            <a href="http://ekchokho.com">More</a>
          </div>
        </div>
        </div>
        <hr/>
        <div className="creator-pair">
        <div className="creator">
          <img src={Image5} alt="Shweta Paramanik" />
          <div className="creator-info">
            <p>Anirban Chatterjee</p>
            <p>Software Developer</p>
            <p>Dept: ECE</p>
            <p>Roll No: 35000320022</p>
            <a href="h">More</a>
          </div>
        </div>
        <hr/>
        <div className="creator">
          <img src={Image6} alt="Shweta Paramanik" />
          <div className="creator-info">
            <p>JOYDEEP DAS</p>
            <p>Software Developer</p>
            <p>Dept: ECE</p>
            <p>Roll No: 35000320020</p>
            <a href="https://sites.google.com/view/shwetapramanik">More</a>
          </div>
        </div>
        </div>
        <hr/>
        <div className="creator-pair">
        <div className="creator">
          <img src={Image7} alt="Shweta Paramanik" />
          <div className="creator-info">
            <p>Souvik Ghosh</p>
            <p>Software Developer</p>
            <p>Dept: ECE</p>
            <p>Roll No: 35001620059</p>
            <a href="https://sites.google.com/view/shwetapramanik">More</a>
          </div>
        </div>
        <hr/>
        <div className="creator">
          <img src={Image8} alt="Shweta Paramanik" />
          <div className="creator-info">
            <p>Soudhaya Patihar</p>
            <p>Software Developer</p>
            <p>Dept: ECE</p>
            <p>Roll No: 35000320027</p>
            <a href="https://sites.google.com/view/shwetapramanik">More</a>
          </div>
        </div>
        </div>
        <hr/>
        <div className="creator-pair">
        <div className="creator">
          <img src={Image9} alt="Shweta Paramanik" />
          <div className="creator-info">
            <p>Raju Gorain</p>
            <p>Web Developer</p>
            <p>Dept: ECE</p>
            <p>Roll No: 35000720009</p>
            <a href="https://rajugorain.github.io/PORTFOLIO/">More</a>
          </div>
        </div>
        <hr/>
        <div className="creator">
          <img src={Image10} alt="Shweta Paramanik" />
          <div className="creator-info">
            <p>Arbaz Ansary</p>
            <p>Web Developer</p>
            <p>Dept: ECE</p>
            <p>Roll No: 35000320030</p>
            <a href="https://arbazportfolio.netlify.app">More</a>
          </div>
        </div>
        </div>
        {/* Add more team members here */}
      </div>
    </div>
  );
};

export default About;
