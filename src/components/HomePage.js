// components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import home from '../images/home.jpg';

import rice from '../images/rice.png';
import wheat from '../images/wheat.png';
import moongdal from '../images/moongdal.jpg';
import jowar from '../images/jowar.png';
import urad from '../images/urad.png';
import gram from '../images/gram.png';

const CropCard = ({ cropName, imagePath }) => (
  <Card style={{ width: '18rem', margin: '10px' }}>
    <Card.Img variant="top" src={imagePath} alt={cropName} />
    <Card.Body>
      <Card.Title>{cropName}</Card.Title>
      {/* Add more details or actions if needed */}
    </Card.Body>
  </Card>
);

const HomePage = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${home})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh', // Set a minimum height to cover the entire viewport
  };

  return (
    <Container fluid>
    <div className="row" style={backgroundImageStyle}>
      {/* Side Navbar */}
      <Nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
          <Nav.Item>
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/crop-recommendation">Crop Recommendation</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/plant-growth-monitoring">Plant Growth Monitoring</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/disease-detection">Disease Detection</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/weather-monitoring">Weather Monitoring</Nav.Link>
          </Nav.Item>
        </div>
      </Nav>

        {/* Content Area */}
        <main role="main" className="col-md-10 ml-sm-auto col-lg-10 px-4 mt-3">
        <div className="row">
          {/* Bootstrap cards for crops */}
          <div className="col-md-3 mb-3 offset-md-3">
            <CropCard cropName="Rice" imagePath={rice} />
            </div>
            <div className="col-md-3 mb-3 offset-md-3">
            <CropCard cropName="wheat" imagePath={wheat} />
            </div>
            <div className="col-md-3 mb-3 offset-md-3">
            <CropCard cropName="jowar" imagePath={jowar} /></div>
            <div className="col-md-3 mb-3 offset-md-3">
            <CropCard cropName="urad" imagePath={urad} /></div>
            <div className="col-md-3 mb-3 offset-md-3">
            <CropCard cropName="gram" imagePath={gram} /></div>
            <div className="col-md-3 mb-3 offset-md-3">
            <CropCard cropName="moong" imagePath={moongdal} /></div>
            {/* Add more cards for other crops as needed */}
            </div>
      </main>
    </div>
  </Container>
  );
};

export default HomePage;


