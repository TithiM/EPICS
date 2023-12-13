import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import login from '../images/login.jpeg';

const SignUpPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    // Add your signup logic here
    console.log('Sign Up clicked:', { firstName, lastName, email, password });
  };

  return (
    <div className="container-fluid" style={{ backgroundImage: `url(${login})`, backgroundSize: 'cover', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div className="row">
        {/* Side Navbar */}
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
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
        </nav>

        {/* Main Content */}
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
          <div className="d-flex justify-content-center align-items-center">
            <form onSubmit={handleSignUp} style={{ border: '4px solid brown', borderRadius: '5px', padding: '16px', margin: '16px' ,width: '400px'}} className="form-signup">
              <h1 className="h3 mb-3 font-weight-normal">Sign Up</h1>
              <label htmlFor="inputFirstName" className="sr-only" style={{ fontWeight: 'bold' }}>First Name</label>
              <input type="text" id="inputFirstName" className="form-control" placeholder="First Name" required autoFocus value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              <label htmlFor="inputLastName" className="sr-only" style={{ fontWeight: 'bold' }}>Last Name</label>
              <input type="text" id="inputLastName" className="form-control" placeholder="Last Name" required value={lastName} onChange={(e) => setLastName(e.target.value)} />
              <label htmlFor="inputEmail" className="sr-only" style={{ fontWeight: 'bold' }}>Email address</label>
              <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required value={email} onChange={(e) => setEmail(e.target.value)} />
              <label htmlFor="inputPassword" className="sr-only" style={{ fontWeight: 'bold' }}>Password</label>
              <input type="password" id="inputPassword" className="form-control" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
              <button className="btn btn-lg btn-primary btn-block" type="submit">Sign Up</button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SignUpPage;
