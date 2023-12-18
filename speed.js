function checkSpeed(speed) {
    const speedLimit = 70;
    let demeritPoints = 0;
  
    if (speed < speedLimit) {
      console.log("Ok");
    } else {
      // Calculate demerit points based on exceeding speed limit
      demeritPoints = Math.floor((speed - speedLimit) / 5);
      console.log(`Points: ${demeritPoints}`);
  
      // Check for license suspension threshold (configurable)
      const suspensionThreshold = 12;
      if (demeritPoints >= suspensionThreshold) {
        console.log("Warning! Points exceed suspension threshold!");
      }
    }
  
    return demeritPoints;
  }
  

  
  
  
  
  