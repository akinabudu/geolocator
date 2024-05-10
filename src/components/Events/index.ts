import React, { useState, useEffect } from 'react';

export default function DeviceEventsPage () {
  const [prevmagnitude, setPrevmagnitude] = useState(0);
  const [stepCount, setStepCount] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  

  
  useEffect(() => {
    
    const handleDeviceOrientation = (e: DeviceOrientationEvent) => {
      const { alpha, beta, gamma } = e;
  
      if (beta && gamma && alpha) {
        const threshold = 170;
        const accelerationMagnitude = Math.sqrt(
          beta * beta + gamma * gamma + alpha * alpha
        );
        const magDelta = accelerationMagnitude - prevmagnitude;
        setPrevmagnitude(accelerationMagnitude);
        // console.log(Math.round(magDelta));
  
        if (magDelta > threshold) {
          setStepCount((prevCount) => prevCount + 1);
          // console.log({ stepCount: stepCount });
        }
      }
    };
    window.addEventListener('deviceorientation', handleDeviceOrientation);
    return () => {
      window.removeEventListener('deviceorientation', handleDeviceOrientation);
    };
  }, );

  return stepCount 
};

