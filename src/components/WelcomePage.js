// src/components/WelcomePage.js
// src/components/WelcomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../images/bg.png';

const backgroundStyle = {
  background: `url(${bg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  overflow: 'hidden',
};


const WelcomePage = () => {
   
  return (
    <div style={backgroundStyle}>
    <div className="welcome-page">
      <div className="container-fluid">
        <div className="row">
          {/* Left Sidebar */}
          <div className="col-md-2 sidebar">
            <ul className="navbar-nav flex-column">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/soil-testing" className="nav-link">Soil Testing</Link>
              </li>
              <li className="nav-item">
                <Link to="/crop-recommendation" className="nav-link">Crop Recommendation</Link>
              </li>
              <li className="nav-item">
                <Link to="/plant-growth-monitoring" className="nav-link">Plant Growth Monitoring</Link>
              </li>
              <li className="nav-item">
                <Link to="/disease-detection" className="nav-link">Disease Detection</Link>
              </li>
              <li className="nav-item">
                <Link to="/weather-monitoring" className="nav-link">Weather Monitoring</Link>
              </li>
            </ul>
          </div>
          
          {/* Welcome Message and Login/Signup */}
          <div className="col-md-10 d-flex align-items-center justify-content-center">
          <div className="card text-center" style={{ backgroundColor: 'rgba(144, 238, 144, 0.8)' }}>
              <div className="card-body">
                <h2 className="card-title">Welcome to AgroTechHub</h2>
                <p className="card-text">Explore the world of agriculture technology. Choose an option:</p>
                <Link to="/login" className="btn btn-primary custom-btn">Login</Link>
                
                <Link to="/signup" className="btn btn-primary custom-btn">Sign Up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default WelcomePage;

