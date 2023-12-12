//import logo from './logo.svg';
// src/App.js
// src/App.js
// src/App.js
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import SoilTesting from './components/SoilTesting';
import CropRecommendation from './components/CropRecommendation';
import PlantGrowthMonitoring from './components/PlantGrowthMonitoring';
import DiseaseDetection from './components/DiseaseDetection';
import WeatherMonitoring from './components/WeatherMonitoring';

function App() {
  return (
    <Router>
      <div>
        

        {/* Main Content */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/soil-testing" element={<SoilTesting />} />
            <Route path="/crop-recommendation" element={<CropRecommendation />} />
            <Route path="/plant-growth-monitoring" element={<PlantGrowthMonitoring />} />
            <Route path="/disease-detection" element={<DiseaseDetection />} />
            <Route path="/weather-monitoring" element={<WeatherMonitoring />} />
          </Routes>
        </div>
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


