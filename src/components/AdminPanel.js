// AdminPanel.js

import React from 'react';
import '../css/adminpanel.css'
function AdminPanel() {
  return (
    <div>
    <h1>WELCOME ADMIN</h1>
    <hr/>
    <div className="admin-panel">
       
      <div className="admin-box">
        <h3>Approve Student</h3>
        {/* Add approval functionality here */}
      </div>
      <div className="admin-box">
        <h3>Add Internship</h3>
        {/* Add internship addition functionality here */}
      </div>
      <div className="admin-box">
        <h3>Add Notice</h3>

        
        {/* Add notice addition functionality here */}
      </div>
    </div>
    </div>
  );
}

export default AdminPanel;
