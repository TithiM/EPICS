// src/components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  // Check user authentication status (you can implement your logic here)
  const isAuthenticated = false; // Replace with your authentication logic

  return (
    <div>
      <h2>Landing Page</h2>
      {isAuthenticated ? (
        <p>Welcome! You are already logged in.</p>
      ) : (
        <div>
          <p>Not logged in? Choose an option:</p>
          <Link to="/login">Login</Link> | <Link to="/signup">Sign Up</Link>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
