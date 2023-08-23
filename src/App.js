import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import HomePage from './components/HomePage';
import AdminPage from './components/AdminPage';
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
  const [adminSignupData, setAdminSignupData] = useState({ secretKey: '', name: '', email: '', password: '', retypePassword: '' });
  const [studentSignupData, setStudentSignupData] = useState({ rollNumber: '', name: '', email: '', password: '', retypePassword: '' });
  const [studentSignupMessage ] = useState('');
  const [adminSigninData, setAdminSigninData] = useState({ email: '', password: '' });
  const [studentSigninData, setStudentSigninData] = useState({ rollNumber: '', password: '' });

  const history = useHistory();
  const [alertMessage, setAlertMessage] = useState('');
   // State for storing all requests
   const [requests, setRequests] = useState([]);

   // Function to fetch all requests from the backend
   const fetchRequests = async () => {
     try {
       const response = await axios.get('https://placement-p2k8.onrender.com/api/request');
       setRequests(response.data);
     } catch (error) {
       console.error('Error fetching requests:', error);
     }
   };
 
 
   useEffect(() => {
     // Fetch all requests from the backend when the component mounts
     fetchRequests();
   }, []);
 

  const handleAdminSignup = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://placement-p2k8.onrender.com/api/admin/signup', adminSignupData);
      console.log(response.data);
      // Move to the sign-in page after successful admin sign-up
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  const handleStudentSignup = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://placement-p2k8.onrender.com/api/student/signup', studentSignupData);
      console.log(response.data);
      // Show "Wait For admin Approval" popup message
      setAlertMessage('Wait for admin approval');
      // Redirect to the home page after 3 seconds
      setTimeout(() => {
        setAlertMessage('');
        history.push('/');
      }, 3000);
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  const handleAdminSignin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://placement-p2k8.onrender.com/api/admin/signin', adminSigninData);
      console.log(response.data);
      // Show "Welcome Admin" alert message
      setAlertMessage('Welcome Admin');
      // Redirect to the Admin page after successful admin sign-in
      history.push('/admin');
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  const handleStudentSignin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://placement-p2k8.onrender.com/api/student/signin', studentSigninData);
      console.log(response.data);
      // Redirect to the Student page after successful student sign-in
      history.push('/internship');
    } catch (error) {
      console.error(error.response.data.message);
    }
  };


// Function to handle approving a request
const handleApproveRequest = async (requestId) => {
  try {
    // Send a PUT request to the backend to approve the request
    await axios.put(`https://placement-p2k8.onrender.com/api/request/${requestId}/approve`);
    // Fetch the updated list of requests after approval
    fetchRequests();
  } catch (error) {
    console.error('Error approving request:', error);
  }
};


 
  // Function to handle denying a request
  const handleDenyRequest = async (requestId) => {
    try {
      // Send a DELETE request to the backend to deny the request
      await axios.delete(`https://placement-p2k8.onrender.com/api/request/${requestId}/deny`);
      // Fetch the updated list of requests after denial
      fetchRequests();
    } catch (error) {
      console.error('Error denying request:', error);
    }
  };

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
            <img src={require('./images/3.jpg')} alt="logo" />
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
            {/* <li>
              <Link to="/process" onClick={closeMenu}>
                <i className="fas fa-cogs"></i> Process
              </Link>
            </li>
            <li>
              <Link to="/internship" onClick={closeMenu}>
              <i class="fa fa-briefcase" aria-hidden="true"></i> Internship
              </Link>
            </li> */}
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
          <Route exact path="/" component={HomePage} />
          <Route exact path="/admin" component={AdminPage}>
            <AdminPage
              requests={requests}
              handleApproveRequest={handleApproveRequest}
              handleDenyRequest={handleDenyRequest}
            />
          </Route>
          
          <Route path="/internship" component={Internship} />
          <Route exact path="/admin/signup">
            <AdminSignUp
              handleAdminSignup={handleAdminSignup}
              adminSignupData={adminSignupData}
              setAdminSignupData={setAdminSignupData}
              />
              </Route>
              <Route exact path="/student/signup">
                <StudentSignUp
                  handleStudentSignup={handleStudentSignup}
                  studentSignupData={studentSignupData}
                  setStudentSignupData={setStudentSignupData}
                />
              </Route>
              <Route exact path="/admin/signin">
                <AdminSignIn
                  handleAdminSignin={handleAdminSignin}
                  adminSigninData={adminSigninData}
                  setAdminSigninData={setAdminSigninData}
                />
              </Route>
              <Route exact path="/student/signin">
                <StudentSignIn
                  handleStudentSignin={handleStudentSignin}
                  studentSigninData={studentSigninData}
                  setStudentSigninData={setStudentSigninData}
                />
              </Route>
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
    