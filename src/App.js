//import logo from './logo.svg';
// src/App.js
// src/App.js
// src/App.js
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import CropRecommendation from './components/CropRecommendation';
import PlantGrowthMonitoring from './components/PlantGrowthMonitoring';
import DiseaseDetection from './components/DiseaseDetection';
import WeatherMonitoring from './components/WeatherMonitoring';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import HomePage from './components/HomePage';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const Header = () => (
  <Navbar bg="dark" variant="dark" className="navbar-transparent">
    <Container>
      <Navbar.Brand href="/" className="mr-auto">AgroTechHub</Navbar.Brand>
      <Nav>
        <Nav.Link href="/login">Login</Nav.Link>
        {/* Add more nav links as needed */}
      </Nav>
    </Container>
  </Navbar>
);

const Footer = () => (
  <footer className="footer">
    <Container>
      <span className="text-muted">© 2023 AgroTechHub</span>
    </Container>
  </footer>
);

function App() {
  return (
    <Router>
      <div>
      <Header />

        {/* Main Content */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/crop-recommendation" element={<CropRecommendation />} />
            <Route path="/plant-growth-monitoring" element={<PlantGrowthMonitoring />} />
            <Route path="/disease-detection" element={<DiseaseDetection />} />
            <Route path="/weather-monitoring" element={<WeatherMonitoring />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/home" element={<HomePage />} />
          </Routes>
          
        </div>
        <Footer />
      </div>
    </Router>
  );
}



/* const Home = () => {
  return (
    <div>
      <h2>Dashboard</h2>
    
    </div>
    );
  }
  */



export default App;


