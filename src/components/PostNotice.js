import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/PostNotice.css';
const Internship = () => {
  const [formData, setFormData] = useState({
    heading: '',
    description: '',
    link: '',
  });

  const [notices, setNotices] = useState([]);

  useEffect(() => {
    // Fetch posted notices from MongoDB
    async function fetchNotices() {
      try {
        const response = await axios.get('https://placement-p2k8.onrender.com/api/notices'); // Replace with your API endpoint
        setNotices(response.data);
      } catch (error) {
        console.error('Error fetching notices:', error);
      }
    }

    fetchNotices();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send the formData to the server and save in MongoDB
    try {
      const response = await axios.post('https://placement-p2k8.onrender.com/api/notices', formData); // Replace with your API endpoint
      console.log('Notice posted:', response.data);
      setFormData({ heading: '', description: '', link: '' });
      setNotices([...notices, response.data]);
    } catch (error) {
      console.error('Error posting notice:', error);
    }
  };

  const handleRemove = async (id) => {
    try {
      await axios.delete(`https://placement-p2k8.onrender.com/api/notices/${id}`); // Replace with your API endpoint
      setNotices(notices.filter((notice) => notice._id !== id));
    } catch (error) {
      console.error('Error removing notice:', error);
    }
  };

  return (
    <div className="internship-container">
      <div className="post-notice">
        <h2>POST NOTICE</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-section">
            <label htmlFor="heading">Heading:</label>
            <input
              type="text"
              id="heading"
              name="heading"
              value={formData.heading}
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
            <label htmlFor="link">Link:</label>
            <input
              type="text"
              id="link"
              name="link"
              value={formData.link}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="posted-notices">
        <h2>POSTED NOTICES</h2>
        {notices.length > 0 ? (
          <ul>
            {notices.map((notice) => (
              <li key={notice._id}>
                <h3>{notice.heading}</h3>
                <p>{notice.description}</p>
                <a href={notice.link} target="_blank" rel="noopener noreferrer">
                  {notice.link}
                </a>
                <button onClick={() => handleRemove(notice._id)}>Remove</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No posted notices yet.</p>
        )}
      </div>
    </div>
  );
};

export default Internship;
