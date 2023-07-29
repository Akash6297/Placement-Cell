import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Fetch all request documents from the "request" collection
    const fetchRequests = async () => {
      try {
        const response = await axios.get('https://placement-p2k8.onrender.com/api/request');
        setRequests(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRequests();
  }, []);

  return (
    <div>
      <h2>Admin Page</h2>
      {/* Display the list of requests */}
      {requests.length > 0 ? (
        <ul>
          {requests.map((request) => (
            <li key={request._id}>
              {/* Display the details of each request */}
              Name: {request.name}, Email: {request.email}, Roll Number: {request.rollNumber}
            </li>
          ))}
        </ul>
      ) : (
        <p>No requests found.</p>
      )}
    </div>
  );
};

export default AdminPage;
