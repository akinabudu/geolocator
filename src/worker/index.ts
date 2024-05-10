


self.addEventListener('deviceorientation', (e) => {

  // console.log("Service-Worker: ", e);
  // const { alpha, beta, gamma } = e;

  // if (beta && gamma && alpha) {
  //     const threshold = 170;
  //     const accelerationMagnitude = Math.sqrt(
  //         beta * beta + gamma * gamma + alpha * alpha
  //     );
  //     // const magDelta = accelerationMagnitude - prevmagnitude; // You'll need to manage prevmagnitude separately
  //     // Handle the rest of your logic here (e.g., step counting)
  //     // Note: You won't have access to React state (stepCount) directly
  //     console.log("Servcie-Sorker: ",accelerationMagnitude);
  // }
},true);
self.addEventListener("install", (event) => {
    
    console.log("Service worker installed");
    
    
  });
  
  self.addEventListener("activate", (event) => {
    console.log("Service worker activated");

  });
  
  self.addEventListener("fetch", (event) => {
    // console.log("Fetching:", event.request.url);
  });

  self.addEventListener('push', (event) => {
    console.log("Push:", event);
    
  });

  self.addEventListener('sync', (event) => {
    console.log("Sync:",  event);
  });

  
    
  
  
  