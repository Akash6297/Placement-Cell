import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/internship.css';
const Internship = () => {
  // State for posting internships
  const [formData, setFormData] = useState({
    googleFormLink: '',
    internshipName: '',
    description: '',
    eligibilityCriteria: '',
    isPaid: false,
    isNonPaid: false,
  });

  // State for posted internships
  const [internships, setInternships] = useState([]);

  useEffect(() => {
    // Fetch posted internships from MongoDB
    async function fetchInternships() {
      try {
        const response = await axios.get('https://placement-p2k8.onrender.com/api/internships');
        setInternships(response.data);
      } catch (error) {
        console.error('Error fetching internships:', error);
      }
    }

    fetchInternships();
  }, []);

  const handleChange = (e) => {
    // Handle form field changes
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({ ...prevData, [name]: newValue }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send the formData to the server and save in MongoDB
    try {
      const response = await axios.post('https://placement-p2k8.onrender.com/api/internships', formData);
      console.log('Internship posted:', response.data);
      // Clear the form
      setFormData({
        googleFormLink: '',
        internshipName: '',
        description: '',
        eligibilityCriteria: '',
        isPaid: false,
        isNonPaid: false,
      });
      // Update the list of internships
      setInternships([...internships, response.data]);
    } catch (error) {
      console.error('Error posting internship:', error);
    }
  };

  const handleRemove = async (id) => {
    // Remove the internship with the given id from MongoDB
    try {
      const response = await axios.delete(`https://placement-p2k8.onrender.com/api/internships/${id}`);
      console.log('Internship removed:', response.data);
      // Update the list of internships
      setInternships(internships.filter((internship) => internship._id !== id));
    } catch (error) {
      console.error('Error removing internship:', error);
    }
  };

  return (
    <div className="internship-container">
      <div className="post-internship">
        <h2>POST INTERNSHIP</h2>
        <form onSubmit={handleSubmit}>
        <div className="form-section">
  <label htmlFor="googleFormLink">Google Form Link:</label>
  <input
    type="text"
    id="googleFormLink"
    name="googleFormLink"
    value={formData.googleFormLink}
    onChange={handleChange}
    required
  />
</div>

<div className="form-section">
  <label htmlFor="internshipName">Internship Name:</label>
  <input
    type="text"
    id="internshipName"
    name="internshipName"
    value={formData.internshipName}
    onChange={handleChange}
    required
  />
</div>

<div className="form-section">
  <label htmlFor="description">Description:</label>
  <textarea
    id="description"
    name="description"
    value={formData.description}
    onChange={handleChange}
    rows="3"
    required
  />
</div>

<div className="form-section">
  <label htmlFor="eligibilityCriteria">Eligibility/Criteria:</label>
  <textarea
    id="eligibilityCriteria"
    name="eligibilityCriteria"
    value={formData.eligibilityCriteria}
    onChange={handleChange}
    rows="3"
    required
  />
</div>

<div className="form-section">
  <label>Stipend:</label>
  <div className="checkbox-section">
    <label>
      <input
        type="checkbox"
        name="isPaid"
        checked={formData.isPaid}
        onChange={handleChange}
      />
      Paid Internship
    </label>
    <label>
      <input
        type="checkbox"
        name="isNonPaid"
        checked={formData.isNonPaid}
        onChange={handleChange}
      />
      Non-Paid Internship
    </label>
  </div>
</div>

          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="posted-internships">
        <h2>POSTED INTERNSHIPS</h2>
        {internships.length > 0 ? (
          <ul>
            {internships.map((internship) => (
              <li key={internship._id}>
                {/* Display internship details */}
                <h3>{internship.internshipName}</h3>
          <p>{internship.description}</p>
          <p>Eligibility/Criteria: {internship.eligibilityCriteria}</p>
          <p>Stipend: {internship.isPaid ? 'Paid' : internship.isNonPaid ? 'Non-Paid' : 'N/A'}</p>
                <button onClick={() => handleRemove(internship._id)}>Remove</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No posted internships yet.</p>
        )}
      </div>
    </div>
  );
};

export default Internship;
