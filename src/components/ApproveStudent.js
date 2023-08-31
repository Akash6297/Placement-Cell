import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApproveStudent = () => {
  const [students, setStudents] = useState([]);
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    // Fetch student data from the backend
    async function fetchStudents() {
      try {
        const response = await axios.get('http://localhost:5000/api/students'); // Replace with your API endpoint
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    }

    // Fetch notices data from the backend
    async function fetchNotices() {
      try {
        const response = await axios.get('/api/notices'); // Replace with your API endpoint
        setNotices(response.data);
      } catch (error) {
        console.error('Error fetching notices:', error);
      }
    }

    fetchStudents();
    fetchNotices();
  }, []);

  const handleApprove = async (studentId) => {
    try {
      await axios.post(`http://localhost:5000/api/students/approve/${studentId}`); // Replace with your API endpoint
      // Update the list of students (remove the approved student)
      setStudents(students.filter((student) => student._id !== studentId));
    } catch (error) {
      console.error('Error approving student:', error);
    }
  };

  const handleDeny = async (studentId) => {
    try {
      await axios.delete(`http://localhost:5000/api/students/${studentId}`); // Replace with your API endpoint
      // Update the list of students (remove the denied student)
      setStudents(students.filter((student) => student._id !== studentId));
    } catch (error) {
      console.error('Error denying student:', error);
    }
  };

  const handleRemoveNotice = async (noticeId) => {
    try {
      await axios.delete(`/api/notices/${noticeId}`); // Replace with your API endpoint
      // Update the list of notices (remove the deleted notice)
      setNotices(notices.filter((notice) => notice._id !== noticeId));
    } catch (error) {
      console.error('Error removing notice:', error);
    }
  };

  return (
    <div className="approve-student-container">
      <div className="student-approval">
        <h2>Student Approval</h2>
        {students.length > 0 ? (
          <ul>
            {students.map((student) => (
              <li key={student._id}>
                <h3>{student.name}</h3>
                <p>Email: {student.email}</p>
                <button onClick={() => handleApprove(student._id)}>Approve</button>
                <button onClick={() => handleDeny(student._id)}>Deny</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No students awaiting approval.</p>
        )}
      </div>

      <div className="notice-list">
        <h2>List of Notices</h2>
        {notices.length > 0 ? (
          <ul>
            {notices.map((notice) => (
              <li key={notice._id}>
                <h3>{notice.title}</h3>
                <p>{notice.description}</p>
                <button onClick={() => handleRemoveNotice(notice._id)}>Remove</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No notices available.</p>
        )}
      </div>
    </div>
  );
};

export default ApproveStudent;
