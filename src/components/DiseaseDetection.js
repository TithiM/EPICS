// src/components/DiseaseDetection.js
import React from 'react';
import Card from 'react-bootstrap/Card';
import rice from '../images/rice.png';


const CropCard = ({ cropName, imagePath, status, reccomendation}) => (
  <Card style={{ width: 'rem', margin: '10px' }}>
    <Card.Img variant="top" src={imagePath} alt={cropName} />
    <Card.Body>
      <Card.Title>{cropName}</Card.Title>
      {/* Add more details or actions if needed */}
      <Card.Text>
       <div>status: {status}</div>
       <div  className='text-black-50'>reccomendation: {reccomendation}</div>
      </Card.Text>
    </Card.Body>
  </Card>
);



const DiseaseDetection = () => {
  // Disease detection logic here

  return (
    <div className='d-flex flex-column justify-content-between align-items-center'>
      <h2>Disease Detection</h2>
      {/* Image processing for leaves and disease detection UI */}

      <div className='w-100 d-flex flex-row justify-content-around align-items-center'>

        <CropCard cropName={"Rice"} imagePath={rice} status={"healthy"} reccomendation={"more water is reccomended"}/>
        <CropCard cropName={"wee"} imagePath={rice}/>
        <CropCard cropName={"wee"} imagePath={rice}/>
        <CropCard cropName={"wee"} imagePath={rice}/>
      </div>
    </div>
  );
};

export default DiseaseDetection;
