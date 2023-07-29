import React from 'react';
import '../styles.css'; // Import the styles.css file

const AdminPage = () => {
  return (
    <div>
      {/* Navbar */}
      <nav>
        <ul>
          <li><a href="./HomePage">Home</a></li>
          {/* You can add more navigation links here */}
        </ul>
      </nav>

      <div className="container">
        <h1>Welcome, Admin!</h1>
        {/* Add content for the admin page */}
      </div>
    </div>
  );
};

export default AdminPage;
