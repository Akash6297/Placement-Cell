import React from 'react';

const Internship = () => {
  // Sample content for the Internship page
  const internships = [
    {
      id: 1,
      title: 'Software Engineer Intern',
      company: 'Example Tech',
      duration: '3 months',
    },
    {
      id: 2,
      title: 'Data Science Intern',
      company: 'Sample Analytics',
      duration: '6 months',
    },
    // Add more internship data as needed
  ];

  return (
    <div className="container">
      <h2>Internship Opportunities</h2>
      <div className="internship-list">
        {internships.map((internship) => (
          <div key={internship.id} className="internship-item">
            <h3>{internship.title}</h3>
            <p>Company: {internship.company}</p>
            <p>Duration: {internship.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Internship;
