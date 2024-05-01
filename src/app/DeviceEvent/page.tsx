'use client'
import React, { useCallback, useEffect,useState } from 'react';

const DeviceEventsPage: React.FC = () => {
// const [alpha, setAlpha] = useState<number|null>(0);
const [beta, setBeta] = useState<number|null>(0);
// const [gamma, setGamma] = useState<number|null>(0);

  const handleDeviceOrientation = useCallback(
    (e: DeviceOrientationEvent) => {
        console.log(e);
        // setAlpha(e.alpha);
        setBeta(e.beta);
        // setGamma(e.gamma);
      // Do something with `e.alpha`, `e.beta`, and `e.gamma`
    //   e.alpha: rotation around the Z axis
    //   e.beta: rotation around the X axis
    //   e.gamma: rotation around the Y axis
    },
    []
  );

  useEffect(() => {
    window.addEventListener('deviceorientation', handleDeviceOrientation);
    return () => {
      window.removeEventListener('deviceorientation', handleDeviceOrientation);
    };
  }, [handleDeviceOrientation]);

  return (
    <div>
      {beta}
    </div>
  );
};

export default DeviceEventsPage;
