// src/components/LandingPage.js
import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const LoginForm = () => (
  <div>
    <h2>Login Form</h2>
    {/* Your login form fields and logic go here */}
  </div>
);

const SignUpForm = () => (
  <div>
    <h2>Sign Up Form</h2>
    {/* Your signup form fields and logic go here */}
  </div>
);

const LandingPage = () => {
  const history = useHistory();

  const handleLoginClick = () => {
    history.push('/login');
  };

  const handleSignUpClick = () => {
    history.push('/signup');
  };

  return (
    <div className="container text-center mt-5">
      <h2>Welcome to AgroTechHub</h2>
      <p>Explore the world of agriculture technology.</p>
      <div className="my-3">
        <button className="btn btn-primary mx-2" onClick={handleLoginClick}>
          Login
        </button>
        <button className="btn btn-link" onClick={handleSignUpClick}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default LandingPage;

