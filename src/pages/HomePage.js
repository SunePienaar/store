import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/HomePage.css'; // Import the CSS file

// Explicitly import images
import poster1 from '../assets/posters/poster1.jpg';
import poster2 from '../assets/posters/poster2.jpg';
import poster3 from '../assets/posters/poster3.jpg';
import poster4 from '../assets/posters/poster4.jpg';
import poster5 from '../assets/posters/poster5.jpg';

const HomePage = () => {
  const location = useLocation(); // React Router's hook to access passed state
  const username = location.state?.username || 'Guest'; // Get the username or default to "Guest"

  // Use imported images in an array and duplicate them for seamless looping
  const images = [poster1, poster2, poster3, poster4, poster5, poster1, poster2, poster3, poster4, poster5];

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome, {username}!</h1>
      <div className="cascading-images">
        {images.map((image, index) => (
          <div className="image-item" key={index}>
            <img src={image} alt={`Poster ${index + 1}`} className="poster-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;