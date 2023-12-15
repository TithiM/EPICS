// src/components/WeatherMonitoring.js
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import {Line} from 'react-chartjs-2';
import{
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from 'chart.js';


ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);





const WeatherMonitoring = () => {

function handleClick(){

}





const[data,setData] = useState({

  labels:['mon','tue','thu'],
  datasets:[{
    labels:'wee',
    data:[3,1,2],
    backgroundColor:'red',
    borderColor:'black',
    pointBorderColor:'red',
  }],
});

const options={
  plugins:{
    legends:true
  },
  scales:{
   
  }
}









useEffect(function(){


  
    fetch("https://api.open-meteo.com/v1/forecast?latitude=23.2547&longitude=77.4029&hourly=temperature_2m")
    .then(res => res.json())
    .then((dt)=>{
      //code here to process the data
      var time = dt.hourly.time;
      var temperature = dt.hourly.temperature_2m;
      console.log(time);
      console.log(temperature );

      time = time.map(function(item){
        let s = item.split("T");
        return(s[0]+" "+s[1]);
      });

      temperature = temperature.map(function(element){return(element*1);});
 

      setData({

        labels:time,
        datasets:[{
          labels:'wee',
          data:temperature,
          backgroundColor:'aqua',
          borderColor:'black',
          pointBorderColor:'aqua',
        }],
      });
    });


},[]);








  return (
    <div className='d-flex flex-column justify-content-between align-items-center'>
      <h2>Weather Monitoring</h2>
      {/* Real-time weather parameters and alerts UI */}
      <div className='graph-box'>
      <Line
      data={data}
      options={options}
      ></Line>
      </div>
     
    </div>
  );
};

export default WeatherMonitoring;




