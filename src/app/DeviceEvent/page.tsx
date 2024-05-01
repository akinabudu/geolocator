"use client";
import React, { useCallback, useEffect, useState } from "react";

const DeviceEventsPage: React.FC = () => {
//   const [alpha, setAlpha] = useState<number | null>(0);
//   const [beta, setBeta] = useState<number | null>(0);
//   const [gamma, setGamma] = useState<number | null>(0);
const [prevmagnitude, setPrevmagnitude] = useState(0);
  const [stepCount, setStepCount] = useState(0);
  const [isStepping, setIsStepping] = useState(false);

  const handleDeviceOrientation = useCallback((e: DeviceOrientationEvent) => {
   // console.log(e);
const {alpha,beta,gamma} =e   
// setGamma(e.gamma);
    // Do something with `e.alpha`, `e.beta`, and `e.gamma`
    //   e.alpha: rotation around the Z axis
    //   e.beta: rotation around the X axis
    //   e.gamma: rotation around the Y axis
    if (beta && gamma && alpha ) {
        const threshold = 200;
        const accelerationMagnitude = Math.sqrt(
          beta * beta + gamma * gamma + alpha * alpha
        );
        const magDelta = accelerationMagnitude - prevmagnitude;
        setPrevmagnitude(accelerationMagnitude);
        console.log(Math.round(accelerationMagnitude))
        // const x = Math.abs(beta)
        // const y= Math.abs(gamma)
        // const z= Math.abs(alpha)
        if(accelerationMagnitude > threshold) {
            setStepCount((prevCount) => prevCount + 1);
            console.log({stepCount:stepCount});
        }
    } 
  }, []);

  useEffect(() => {
    window.addEventListener("deviceorientation", handleDeviceOrientation);
    return () => {
      window.removeEventListener("deviceorientation", handleDeviceOrientation);
    };
  }, [handleDeviceOrientation]);

  return <div>{stepCount}</div>;
};

export default DeviceEventsPage;
