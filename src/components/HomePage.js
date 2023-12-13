// components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import rice from '../images/rice.png';
import wheat from '../images/wheat.png';
import moong from '../images/moong.png';
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
  return (
    <Container fluid>
      <div className="row">
        {/* Side Navbar */}
        <Nav className="col-md-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <Nav.Item>
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
            </Nav.Item>
            {/* Add more sidebar links as needed */}
          </div>
        </Nav>

        {/* Content Area */}
        <main role="main" className="col-md-10 ml-sm-auto col-lg-10 px-4">
          <div className="d-flex justify-content-center align-items-center flex-wrap">
            {/* Bootstrap cards for crops */}
            <CropCard cropName="Rice" imagePath={rice} />
            <CropCard cropName="wheat" imagePath={wheat} />
            
            <CropCard cropName="jowar" imagePath={jowar} />
            <CropCard cropName="urad" imagePath={urad} />
            <CropCard cropName="gram" imagePath={gram} />
            <CropCard cropName="moong" imagePath={moong} />
            {/* Add more cards for other crops as needed */}
          </div>
        </main>
      </div>
    </Container>
  );
};

export default HomePage;


