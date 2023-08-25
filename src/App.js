import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import AdminPanel from './components/AdminPanel';
import StudentPanel from './components/StudentPanel';
import AdminSignUp from './components/AdminSignUp';
import StudentSignUp from './components/StudentSignUp';
import AdminSignIn from './components/AdminSignIn';
import StudentSignIn from './components/StudentSignIn';
import SignUpPopup from './components/SignUpPopup';
import Internship from './components/Internship';
import About from './components/About';
import Process from './components/Process';
import Footer from './components/Footer';
import './styles.css';
import './css/navbar.css';

const App = () => {
 
  const [showSignUpPopup, setShowSignUpPopup] = useState(false);

  const [studentSignupMessage ] = useState('');


  // const history = useHistory();

  const [alertMessage] = useState('');


  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    const handleLinkClick = () => {
      setShowMenu(false);
    };
    const links = document.querySelectorAll('.nav-links a, .nav-links button');
    links.forEach((link) => {
      link.addEventListener('click', handleLinkClick);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', handleLinkClick);
      });
    };
  }, []);

  return (
    <Router>
      <nav className={`navbar ${showMenu ? 'show' : ''}`}>
        <div className="navbar-container">
          <Link to="/" className="logo">
            <img src={require('./Logo.webp')} alt="logo" />
          </Link>

          <div className="menu-icon" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <ul className={`nav-links ${showMenu ? 'show' : ''}`}>
            <li>
              <Link to="/" onClick={closeMenu}>
                <i className="fas fa-home"></i> HOME
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMenu}>
                <i className="fas fa-info-circle"></i> About
              </Link>
            </li>
            
            <li>
            <Link to="/student/signin">
            <i class="fa fa-user-circle" aria-hidden="true"></i> STUDENT
          </Link>
            </li>
            <li>
            <Link to="/admin/signin">
            <i class="fa fa-address-book" aria-hidden="true"></i> ADMIN
          </Link>
            </li>
            <li onClick={() => setShowSignUpPopup(true)}>
              <Link to="/signup">
                <i className="fas fa-user-plus"></i> SIGN-UP
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {showSignUpPopup && <SignUpPopup onClose={() => setShowSignUpPopup(false)} />}

      <div className="container">
        <Switch>
        <Route exact path="/student/signup" component={StudentSignUp} />
        <Route exact path="/student/signin" component={StudentSignIn} />
        <Route exact path="/admin/signup" component={AdminSignUp} />
        <Route exact path="/admin/signin" component={AdminSignIn} />
        <Route exact path="/student/panel" component={StudentPanel} />
        <Route exact path="/admin/panel" component={AdminPanel} />
          <Route exact path="/" component={HomePage} />
          
          
          <Route path="/internship" component={Internship} />
         
              <Route path="/about" component={About} />
              <Route path="/process" component={Process} />
            </Switch>
            {alertMessage && <div className="alert">{alertMessage}</div>}
            {studentSignupMessage && <div>{studentSignupMessage}</div>}
          </div>
          <Footer />
        </Router>
      );
    };
    
    export default App;
    