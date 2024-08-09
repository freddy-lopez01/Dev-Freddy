import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectGrid.css';

// Array of social media platforms with their icons and URLs
const projectLinks = [
  { text: 'Machine Learning', path: '/machine-learning', backgroundImage: 'url(back1.jpg)'},
  { text: 'Web App',          path: '/web-applications', backgroundImage: 'url(tetra.jpg)'},
  { text: 'Stand-Alone App',  path: '/stand-alone-apps', backgroundImage: 'url(back2.jpg)' },
];

const ProjectGrid = () => {
  return (
    <div className="project-grid-container">
      {projectLinks.map((project, index) => (
        <div key={index} className="project-grid-item" style={{ backgroundImage: project.backgroundImage }}>
          <Link to={project.path}>{project.text}</Link>
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
