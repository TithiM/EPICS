// src/components/WeatherMonitoring.js
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const WeatherMonitoring = () => {

function handleClick(){

}
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const we = [];
let time=[];
const [stringData,setStringData] = useState([]);
const [timeData,setTimeData]  =useState([]);
const [wData,setwData] = useState({
  we,
  datasets: [
    {
      label: 'Dataset 1',
      data: we,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  
  ],
});

useEffect(function(){







  let temp=[];
  
    fetch("https://api.open-meteo.com/v1/forecast?latitude=23.2547&longitude=77.4029&hourly=temperature_2m")
    .then(res => res.json())
    .then((dt)=>{
      //code here to process the data
      time = dt.hourly.time;
      temp = dt.hourly.temperature_2m;
      console.log(time);
      console.log(temp );

      time = time.map(function(item){
        let s = item.split("T");
        return(s[0]+" "+s[1]);
      });
 


      setwData(  {
        time,
        datasets: [
          {
            label: 'Dataset 1',
            data: temp.map(num=>num*1),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        
        ],
      });

      setStringData(temp);
          setTimeData(time);
    });


},[]);

  return (
    <div className='d-flex flex-column justify-content-between align-items-center'>
      <h2>Weather Monitoring</h2>
      {/* Real-time weather parameters and alerts UI */}
      <div className=' w-25'>
      <Line options={options} data={wData} />
      {stringData.map((tmp,index)=><div>{tmp+" "+timeData[index]}</div>)}
      </div>
     
    </div>
  );
};

export default WeatherMonitoring;
