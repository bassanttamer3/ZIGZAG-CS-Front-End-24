function showTypes<T1 = string, T2 = string, T3 = string>(param1?: T1, param2?: T2, param3?: T3): string {
    const value1 = param1 !== undefined ? param1 : "Nothing";
    const value2 = param2 !== undefined ? param2 : "Nothing";
    const value3 = param3 !== undefined ? param3 : "Nothing";
    return `${value1} - ${value2} - ${value3}`;
  }
  
  // Do Not Edit Here
  console.log(showTypes()); // Nothing - Nothing - Nothing
  console.log(showTypes<string>("String")); // String - Nothing - Nothing
  console.log(showTypes<string, number>("String", 100)); // String - 100 - Nothing
  console.log(showTypes<string, number, boolean>("String", 100, true)); // String - 100 - true
  