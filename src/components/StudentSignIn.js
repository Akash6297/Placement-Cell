// // StudentSignIn.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useHistory } from 'react-router-dom'; 
// function StudentSignIn() {
//   const history = useHistory();
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('https://placement-p2k8.onrender.com/api/student/login', formData);
//       console.log(response.data.message);
//       alert('Sign In successfully!');
//       history.push('/student/panel'); 
//     } catch (error) {
//       console.error(error.response.data.message);
//     }
//   };

//   return (
//     <div className="contact-container">
//       <h2>Student Sign In</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Username"
//           name="username"
//           value={formData.username}
//           onChange={(e) => setFormData({ ...formData, username: e.target.value })}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           name="password"
//           value={formData.password}
//           onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//         />
//         <button type="submit">Sign In</button>
//       </form>
//     </div>
//   );
// }

// export default StudentSignIn;


// Signin.js
import React, { useState } from 'react';
import axios from 'axios';
import '../css/student.css';
const Signin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/students/signin', formData);
      if (response.status === 200) {
        setMessage('Signin successful');
        // Redirect to the student dashboard or another page
      } else {
        setMessage('Signin failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Signin error:', error);
      setMessage('Signin failed. Please check your credentials.');
    }
  };

  return (
    <div className="signin-container">
      <h2>Student Signin</h2>
      <form className="signin-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Sign In</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default Signin;
