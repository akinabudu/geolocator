'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GoogleStepCounter = () => {
  const [steps, setSteps] = useState(0);

  useEffect(() => {
    // Function to fetch step count from Google Fit
    const fetchSteps = async () => {
      try {
        // Replace with your OAuth token
        const accessToken = process.env.NEXT_PUBLIC_GOOGLE_FITAPI;
        const dataSourceId = 'derived:com.google.step_count.delta:com.google.android.gms:estimated_steps';
        const today = new Date();
        const endTime = today.toISOString();
        today.setHours(0, 0, 0, 0);
        const startTime = today.toISOString();

        const response = await axios({
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          url: 'https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate',
          data: {
            aggregateBy: [{
              dataSourceId: dataSourceId,
            }],
            bucketByTime: { durationMillis: 86400000 },
            startTimeMillis: new Date(startTime).getTime(),
            endTimeMillis: new Date(endTime).getTime(),
          },
        });

        // Extract step count from the response
        const stepCount = response.data.bucket[0].dataset[0].point[0].value[0].intVal;
        setSteps(stepCount);
        console.log(stepCount)
      } catch (error) {
        console.error('Error fetching step count:', error);
      }
    };

    fetchSteps();
  }, []);

  return (
    <div>
      <h1>Google Fit Step Counter</h1>
      <p>You walked <strong>{steps}</strong> steps today!</p>
    </div>
  );
};

export default GoogleStepCounter;
