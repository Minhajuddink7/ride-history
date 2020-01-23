import React from 'react';
import Header from './components/header/header';
import Rides from './components/rides/rides';

import './App.css';

function App() {
  const ridesData = [
    {
      vehicleType: 'Auto',
      rideDate: '1579329830',
      CRN: '6567898765678',
      pickupAddress: '791, 5th Cross, Koramangala',
      dropAddress: 'Forum mall, Koramangala',
      fare: 322,
      driverProfile:
        'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg',
      isCancelled: true
    },
    {
      vehicleType: 'Micro',
      rideDate: '1579329830',
      CRN: '6567898765678',
      pickupAddress: '791, 5th Cross, Koramangala',
      dropAddress: 'Forum mall, Koramangala',
      fare: 342,
      driverProfile:
        'https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg',
      isCancelled: false
    },
    {
      vehicleType: 'Auto',
      rideDate: '1579329830',
      CRN: '6567898765678',
      pickupAddress: '791, 5th Cross, Koramangala',
      dropAddress: 'Forum mall, Koramangala',
      fare: 322,
      driverProfile:
        'https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg',
      isCancelled: true
    },
    {
      vehicleType: 'Micro',
      rideDate: '1579329830',
      CRN: '6567898765678',
      pickupAddress: '791, 5th Cross, Koramangala',
      dropAddress: 'Forum mall, Koramangala',
      fare: 322,
      driverProfile:
        'https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg',
      isCancelled: true
    }
  ];
  return (
    <div className='App'>
      <Header />
      <Rides rides={ridesData} />
    </div>
  );
}

export default App;
