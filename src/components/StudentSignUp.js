// import React, { useState } from 'react';
// import axios from 'axios';
// import { useHistory } from 'react-router-dom';
// function StudentSignUp() {
//   const history = useHistory();
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('https://placement-p2k8.onrender.com/api/student/register', formData);
//       console.log(response.data.message);
     
//         alert('Sign Up successfully!');
//         history.push('/student/panel'); 
//     } catch (error) {
//       console.error(error.response.data.message);
//     }
//   };

//   return (
//     <div className="contact-container">
//       <h2>Student Sign Up</h2>
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
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// }

// export default StudentSignUp;


// Signup.js
import React, { useState } from 'react';
import axios from 'axios';
import '../css/student.css';
const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    // Add more fields as needed
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/students/signup', formData);
      if (response.status === 201) {
        setMessage('Wait for Admin Approval');
        // Clear form fields
        setFormData({ name: '', email: '' }); // Add more fields as needed
      } else {
        setMessage('Signup failed. Please try again.');
      }
    } catch (error) {
      console.error('Signup error:', error);
      setMessage('Signup failed. Please try again.');
    }
  };

  return (
    <div className="signup-container">
      <h2>Student Signup</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        {/* Add more form fields as needed */}

        <button type="submit">Sign Up</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default Signup;
