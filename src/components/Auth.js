// src/components/Auth/Auth.js
// src/components/Auth.js
// src/components/Auth.js
import React from 'react';

const Auth = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Login or Sign Up</h2>
              {/* Login and Signup UI */}
              <form>
                {/* Add your form fields here */}
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input type="text" className="form-control" id="username" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" id="password" />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <span className="ml-2">or</span>
                <button type="button" className="btn btn-link">Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;


