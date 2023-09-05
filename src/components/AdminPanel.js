// AdminPanel.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import '../css/adminpanel.css';

function AdminPanel() {
  return (
    <div>
      <h1>WELCOME ADMIN</h1>
      <hr />
      <div className="admin-panel">
        <div className="admin-box">
          <Link to="/approvestudent"> {/* Link to the Internship route */}
            <h3>Approve Student</h3>
          </Link>
          {/* Add approval functionality here */}
        </div>
        <div className="admin-box">
          <Link to="/internship"> {/* Link to the Approve Student route */}
            <h3>Add Internship</h3>
          </Link>
          {/* Add internship addition functionality here */}
        </div>
        <div className="admin-box">
          <Link to="/postnotice"> {/* Link to the Post Notice route */}
            <h3>Add Notice</h3>
          </Link>
          {/* Add notice addition functionality here */}
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
