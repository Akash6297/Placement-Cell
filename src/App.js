// import React, { useState , useEffect} from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import axios from 'axios';
// import HomePage from './components/HomePage';
// import AdminPage from './components/AdminPage';
// import AdminSignUp from './components/AdminSignUp';
// import StudentSignUp from './components/StudentSignUp';
// import AdminSignIn from './components/AdminSignIn';
// import StudentSignIn from './components/StudentSignIn';
// import StudentPage from './components/StudentPage';
// import SignInPopup from './components/SignInPopup'; // Import the SignInPopup component
// import SignUpPopup from './components/SignUpPopup';
// import About from './components/About'; // Import the About component
// import Process from './components/Process'; // Import the Process component
// import Footer from './components/Footer';
// import './styles.css';
// import './css/navbar.css';

// const App = () => {
//   // State for popup visibility
//   const [showSignInPopup, setShowSignInPopup] = useState(false);
//   const [showSignUpPopup, setShowSignUpPopup] = useState(false);
//   const [adminSignupData, setAdminSignupData] = useState({ secretKey: '', name: '', email: '', password: '', retypePassword: '' });
//   const [studentSignupData, setStudentSignupData] = useState({ rollNumber: '', name: '', email: '', password: '', retypePassword: '' });
//   const [studentSignupMessage, setStudentSignupMessage] = useState('');
//   const [adminSigninData, setAdminSigninData] = useState({ email: '', password: '' });
//   const [studentSigninData, setStudentSigninData] = useState({ rollNumber: '', password: '' });

//   const handleAdminSignup = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post('https://placement-p2k8.onrender.com/api/admin/signup', adminSignupData);
//       console.log(response.data);
//       // Move to the sign-in page after successful admin sign-up
//     } catch (error) {
//       console.error(error.response.data.message);
//     }
//   };

//   const handleStudentSignup = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post('https://placement-p2k8.onrender.com/api/student/signup', studentSignupData);
//       console.log(response.data);
//       // Show "Wait For admin Approval" popup message
//       setStudentSignupMessage('Wait for admin approval');
//       // Redirect to the home page
//       setTimeout(() => {
//         setStudentSignupMessage('');
//         // history.push('/');
//       }, 3000); // Redirect after 3 seconds
  
//       // Store the student's details in the "request" collection
//       // await axios.post('https://placement-p2k8.onrender.com/api/request', studentSignupData);
//     } catch (error) {
//       console.error(error.response.data.message);
//     }
//   };
  

//   const handleAdminSignin = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post('https://placement-p2k8.onrender.com/api/admin/signin', adminSigninData);
//       console.log(response.data);
//       // Move to the Admin page after successful admin sign-in
//     } catch (error) {
//       console.error(error.response.data.message);
//     }
//   };

//   const handleStudentSignin = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post('https://placement-p2k8.onrender.com/api/student/signin', studentSigninData);
//       console.log(response.data);
//       // Move to the Student page after successful student sign-in
//     } catch (error) {
//       console.error(error.response.data.message);
//     }
//   };
//   const [showMenu, setShowMenu] = useState(false);
  
//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };



//   const closeMenu = () => {
//     setShowMenu(false);
//   };

//   useEffect(() => {
//     // Add event listener to close the menu when a link inside the menu is clicked
//     const handleLinkClick = () => {
//       setShowMenu(false);
//     };
//     const links = document.querySelectorAll('.nav-links a, .nav-links button');
//     links.forEach((link) => {
//       link.addEventListener('click', handleLinkClick);
//     });

//     return () => {
//       // Clean up the event listener on unmount
//       links.forEach((link) => {
//         link.removeEventListener('click', handleLinkClick);
//       });
//     };
//   }, []);


//   return (
//     <Router>
//        <nav className={`navbar ${showMenu ? 'show' : ''}`}>
//       <div className="navbar-container">
//       <Link to="/" className="logo">
//           <img src={require('./images/logo.webp')} alt="logo" />
//           </Link>

//         <div className="menu-icon" onClick={toggleMenu}>
//           <div className="bar"></div>
//           <div className="bar"></div>
//           <div className="bar"></div>
//         </div>
//         <ul className={`nav-links ${showMenu ? 'show' : ''}`}>
        
//           <li><Link to="/" onClick={closeMenu}><i className="fas fa-home"></i> HOME</Link></li>
//           {/* <li><Link to="/about"><i className="fas fa-info-circle"></i> ABOUT</Link></li>
//           <li><Link to="/process"><i className="fas fa-cogs"></i> PROCESS</Link></li> */}
//           <li><Link to="/about" onClick={closeMenu}><i className="fas fa-info-circle"></i>About</Link></li> {/* Add the About link */}
//           <li><Link to="/process" onClick={closeMenu}><i className="fas fa-cogs"></i>Process</Link></li> {/* Add the Process link */}
//           <li onClick={() => setShowSignInPopup(true)}><Link to="/signin"><i className="fas fa-sign-in-alt"></i> SIGN-IN</Link></li>
//           <li onClick={() => setShowSignUpPopup(true)}><Link to="/signup"><i className="fas fa-user-plus"></i> SIGN-UP</Link></li>
//         </ul>
//         </div>
//       </nav>
//       {/* Render the SignInPopup if showSignInPopup is true */}
//       {showSignInPopup && <SignInPopup onClose={() => setShowSignInPopup(false)} />}

//       {/* Render the SignUpPopup if showSignUpPopup is true */}
//       {showSignUpPopup && <SignUpPopup onClose={() => setShowSignUpPopup(false)} />}

//       <div className="container">
//         <Switch>
//         <Route exact path="/" component={HomePage} />
//         <Route exact path="/admin" component={AdminPage} />
//           <Route path="/internship">
//             <StudentPage />
//           </Route>
//           <Route exact path="/admin/signup" component={AdminSignUp}>
//             <AdminSignUp handleAdminSignup={handleAdminSignup} adminSignupData={adminSignupData} setAdminSignupData={setAdminSignupData} />
//           </Route>
//           <Route exact path="/student/signup" component={StudentSignUp}>
//             <StudentSignUp handleStudentSignup={handleStudentSignup} studentSignupData={studentSignupData} setStudentSignupData={setStudentSignupData} />
//           </Route>
//           <Route exact path="/admin/signin" component={AdminSignIn}>
//             <AdminSignIn handleAdminSignin={handleAdminSignin} adminSigninData={adminSigninData} setAdminSigninData={setAdminSigninData} />
//           </Route>
//           <Route exact path="/student/signin" component={StudentSignIn}>
//             <StudentSignIn handleStudentSignin={handleStudentSignin} studentSigninData={studentSigninData} setStudentSigninData={setStudentSigninData} />
//           </Route>
//           <Route path="/about" component={About} /> {/* Add the route for the About component */}
//           <Route path="/process" component={Process} /> {/* Add the route for the Process component */}
//         </Switch>

//         {studentSignupMessage && <div>{studentSignupMessage}</div>}
//       </div>
//       <Footer /> {/* Add the Footer component at the bottom */}
//     </Router>
//   );
// };

// export default App;


import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import HomePage from './components/HomePage';
import AdminPage from './components/AdminPage';
import AdminSignUp from './components/AdminSignUp';
import StudentSignUp from './components/StudentSignUp';
import AdminSignIn from './components/AdminSignIn';
import StudentSignIn from './components/StudentSignIn';
import StudentPage from './components/StudentPage';
import SignInPopup from './components/SignInPopup';
import SignUpPopup from './components/SignUpPopup';
import About from './components/About';
import Process from './components/Process';
import Footer from './components/Footer';
import './styles.css';
import './css/navbar.css';

const App = () => {
  const [showSignInPopup, setShowSignInPopup] = useState(false);
  const [showSignUpPopup, setShowSignUpPopup] = useState(false);
  const [adminSignupData, setAdminSignupData] = useState({ secretKey: '', name: '', email: '', password: '', retypePassword: '' });
  const [studentSignupData, setStudentSignupData] = useState({ rollNumber: '', name: '', email: '', password: '', retypePassword: '' });
  const [studentSignupMessage, setStudentSignupMessage] = useState('');
  const [adminSigninData, setAdminSigninData] = useState({ email: '', password: '' });
  const [studentSigninData, setStudentSigninData] = useState({ rollNumber: '', password: '' });

  const history = useHistory();

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
      setStudentSignupMessage('Wait for admin approval');
      // Redirect to the home page after 3 seconds
      setTimeout(() => {
        setStudentSignupMessage('');
        // history.push('/');
      }, 3000);

      // No need to store the student's details in the "request" collection here.
      // await axios.post('https://placement-p2k8.onrender.com/api/request', studentSignupData);
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
      alert('Welcome Admin');
      // Move to the Admin page after successful admin sign-in
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
      // Move to the Student page after successful student sign-in
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
            <img src={require('./images/logo.webp')} alt="logo" />
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
                <i className="fas fa-info-circle"></i>About
              </Link>
            </li>
            <li>
              <Link to="/process" onClick={closeMenu}>
                <i className="fas fa-cogs"></i>Process
              </Link>
            </li>
            <li onClick={() => setShowSignInPopup(true)}>
              <Link to="/signin">
                <i className="fas fa-sign-in-alt"></i> SIGN-IN
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

      {showSignInPopup && <SignInPopup onClose={() => setShowSignInPopup(false)} />}
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
          <Route exact path="/internship" component={StudentPage} />
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
    
            {studentSignupMessage && <div>{studentSignupMessage}</div>}
          </div>
          <Footer />
        </Router>
      );
    };
    
    export default App;
    