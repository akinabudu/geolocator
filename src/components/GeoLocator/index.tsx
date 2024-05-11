import React, { useState, useEffect } from 'react';

const GeolocationExample = () => {
    const [location, setLocation] = useState<{ latitude: number | null, longitude: number | null }>({ latitude: null, longitude: null });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          // console.log('Geolocation data:', position);
        },
        (error) => {
          // console.error('Error getting geolocation:', error.message);
        }
      );
    } else {
      // console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <div>
      {location.latitude && location.longitude ? (
        <div>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>

        </div>
      ) : (
        <p>Loading geolocation data...</p>
      )}
    </div>
  );
};

export default GeolocationExample;
