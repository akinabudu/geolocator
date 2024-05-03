self.addEventListener("install", (event) => {
    console.log("Service worker installed");
  });
  
  self.addEventListener("activate", (event) => {
    console.log("Service worker activated");
    event.waitUntil(calculateStepCount() )

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

  function calculateStepCount() {
    const stepCount = 400
    
      console.log(stepCount)
  }
  