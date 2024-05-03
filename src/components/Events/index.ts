import React, { useCallback, useEffect, useState } from "react";

const DeviceEventsPage = () => {
  const [prevmagnitude, setPrevmagnitude] = useState(0);
  const [stepCount, setStepCount] = useState(0);
  const [isStepping, setIsStepping] = useState(false);

  const handleDeviceOrientation = useCallback((e: DeviceOrientationEvent) => {
    const { alpha, beta, gamma } = e;

    if (beta && gamma && alpha) {
      const threshold = 150;
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
  }, []);

  useEffect(() => {
    window.addEventListener("deviceorientation", handleDeviceOrientation);
    return () => {
      window.removeEventListener("deviceorientation", handleDeviceOrientation);
    };
  }, [handleDeviceOrientation]);

  return stepCount / 100;
};

export default DeviceEventsPage;
