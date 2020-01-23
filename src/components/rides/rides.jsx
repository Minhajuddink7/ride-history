import React from 'react';
import './rides.css';
import car from '../../assets/automobile.svg';
import auto from '../../assets/rickshaw.svg';
import cancel from '../../assets/cancelled.png';

const Rides = ({ rides }) => {
  return (
    <div>
      {rides.map((ride, index) => {
        let { rideDate } = ride;
        let dateString = new Date(parseInt(rideDate)).toDateString();
        if (dateString === new Date().toDateString()) {
          dateString = 'Today';
        }
        let timeString = new Date(parseInt(rideDate));
        let hours = timeString.getHours();
        let minutes = timeString.getMinutes();

        let time = `${hours}:${minutes}`;
        return (
          <div key={index}>
            <div className='rideDetails'>
              <div className='rides'>
                <div>
                  <img
                    className='icon'
                    src={ride.vehicleType === 'Auto' ? auto : car}
                    alt='icon'
                  />
                </div>
                <div className='date'>
                  {dateString} {time}
                  <div>CRN:{ride.CRN}</div>
                </div>
                <div className='price'>&#8377; {ride.fare}</div>
              </div>
              <div className='details'>
                <div className='circles'>
                  <div>
                    <div className='green'></div>
                    <span>{ride.pickupAddress}</span>
                  </div>
                  <div className='small'></div>
                  <div className='small'></div>
                  <div className='small'></div>
                  <div className='small'></div>
                  <div className='small'></div>
                  <div>
                    <div className='red'></div>
                    <span>{ride.dropAddress}</span>
                  </div>
                </div>
                <div className='imageDiv'>
                  <img
                    className='driver'
                    src={ride.driverProfile}
                    alt='driver profile'
                  />
                  {ride.isCancelled && (
                    <img src={cancel} alt='cancel' className='cancel' />
                  )}
                </div>
              </div>
              <hr />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Rides;
