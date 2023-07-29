import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../css/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      
      <div className="footer-content">
      <section>
        <div className="footer-links">
          <a href="/"><i className="fas fa-home"></i></a>
          
          <a href="/about"><i className="fas fa-info-circle"></i></a>
          
          <a href="/process"><i className="fas fa-cogs"></i></a>
          
          
        </div>
        
       
        </section>
        <section>
        <div className="footer-contact">
          <p>Contact us: contact@example.com</p>
          {/* Add more contact information as needed */}
        </div>
        <br/>
        
        
        {/* </section>
        <section> */}
        <div className="footer-social">
          <a href="https://www.facebook.com/yourfacebookpage" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
        {/* </div>
        <div> */}
          <a href="https://twitter.com/yourtwitterpage" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          {/* </div>
          <div> */}
          <a href="https://www.instagram.com/yourinstagrampage" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          
          {/* Add more social media icons and links as needed */}
        </div>
        </section>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <a href="https://akash6297.github.io/Akash-Mandal"><p>Created By -Akash Mandal</p></a>
      </div>

    </footer>
  );
};

export default Footer;
