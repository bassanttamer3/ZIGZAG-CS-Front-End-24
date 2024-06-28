function callbackFunction(arg1, arg2, callback) {
    setTimeout(() => {
      const result = arg1 + arg2;
      if (result  >= 0) {
        callback(null, result);
      } else {
        callback(new Error('Result is negativ!'), null);      }
    }, 1000);
  }
  
  function promisiFunction(arg1, arg2) {
    return new Promise((resolve, reject) => {
      callbackFunction(arg1, arg2, (error, result) => {
        if (error) {
          reject(error); 
        } else {
          resolve(result); 
        }
      });
    });
  }
  

  promisiFunction(2, -3)
    .then(result => {
      console.log('Result:', result);
    })
    .catch(error => {
    
      console.log('Error:', error.message);
    });
  
