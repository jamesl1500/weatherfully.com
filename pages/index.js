import Head from 'next/head'
import Image from 'next/image'

import Layout from './components/layouts/layout';
import Website from './components/layouts/website';

import {useState} from 'react';
import axios from 'axios';

export default function Index() {
	const [city, setCity] = useState('');
	const [temp, setTemp] = useState(null);
	const [minTemp, setMinTemp] = useState('');
	const [maxTemp, setMaxTemp] = useState('');
	const [err, setErr] = useState(false);

  // Current Location
  const [long, setLong] = useState('');
  const [lat, setLat] = useState('');

  // Axios call
  const options = {
    method: 'GET',
    url: 'https://api.openweathermap.org/data/3.0/onecall',
    params: {'lat': '${lat}', 'lon': '${lon}'}
  }

  var getPosition = function (options) {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  }
  
  getPosition()
    .then((position) => {
      console.log(position);
    })
    .catch((err) => {
      console.error(err.message);
  }); 

  return (
    <Website>
      <div className="indexInnerLayer">
        <div className="sidebar col-lg-3">
          <div className="innerSidebar">
            {status}
          </div>
        </div>
        <div className="indexContent">

        </div>
      </div>
    </Website>
  )
      
}
