function isHeOld(age: number | string[]) : string[] | number {
    if (typeof age === 'number') {
        return age > 40 ? ["Yes"] : ["No"];
    }else{
        return ["No"];
    }
   
  }
  
  // Do Not Edit Here
  console.log(isHeOld("100")); // Error
  console.log(isHeOld(45)); // "Yes"
  console.log(isHeOld(30)); // "No"