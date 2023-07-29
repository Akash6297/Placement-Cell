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
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/process">Process</a>
          
        </div>
        <div className="footer-contact">
          <p>Contact us: contact@example.com</p>
          {/* Add more contact information as needed */}
        </div>
        </section>
        <section>
        
        {/* </section>
        <section> */}
        <div className="footer-social">
          <a href="https://www.facebook.com/yourfacebookpage" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} />FACEBOOK
          </a>
          <br />
          <a href="https://twitter.com/yourtwitterpage" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />TWITTER
          </a>
          <br />
          <a href="https://www.instagram.com/yourinstagrampage" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />INSTAGRAM
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
