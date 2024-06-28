function invokeAfterDelay(callback) {
    setTimeout(callback, 2000); 
  }

  invokeAfterDelay(() => {
    console.log("This message is displayed after a 2-second delay.");
  });
  