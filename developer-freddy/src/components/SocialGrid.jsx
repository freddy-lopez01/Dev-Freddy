import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJira, faInstagram, faLinkedinIn, faYoutube, faGithub, faTiktok } from '@fortawesome/free-brands-svg-icons';
import './SocialGrid.css';

// Array of social media platforms with their icons and URLs
const socialMediaLinks = [
  { icon: faGithub, url: 'https://github.com/freddy-lopez01' },
  { icon: faLinkedinIn, url: 'https://www.linkedin.com/in/freddy-lopez-558639260/' },
  { icon: faJira, url: 'https://hpcrcf.atlassian.net/wiki/spaces/TW/pages/2916614147/How-To+Creating+personalized+conda+environments' },
  { icon: faYoutube, url: 'https://www.youtube.com/@flscapes' },
  { icon: faInstagram, url: 'https://www.instagram.com/flscapes/?locale=hi_IN' },
  { icon: faTiktok, url: 'https://www.tiktok.com/@freddylopez366?lang=en' },
];

const SocialGrid = () => {
  return (
    <div className="grid-container">
      {socialMediaLinks.map((social, index) => (
        <a href={social.url} target="_blank" rel="noopener noreferrer">
        <div key={index} className="grid-item">
          <a href={social.url} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={social.icon} />
          </a>
        </div>
        </a>
      ))}
    </div>
  );
};

export default SocialGrid;

