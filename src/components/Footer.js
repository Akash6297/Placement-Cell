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
            <a href="/" className="footer-link">Home </a>

            <a href="/about" className="footer-link"> About</a>
            
          </div>
        </section>

        <section>
          <div className="footer-contact">
            <p>Contact us: <br /> contact@example.com</p>
          </div>
        </section>

        <section>
          <div className="footer-social">
            <a href="https://www.facebook.com/yourfacebookpage" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://twitter.com/yourtwitterpage" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.instagram.com/yourinstagrampage" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </section>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <p>Created By <a href="https://akash6297.github.io/Akash-Mandal" className="footer-link">Akash Mandal</a></p>
      </div>
    </footer>
  );
};

export default Footer;
