interface Man {
    title: string;
    weight: number;
    age: number;
  }
  
  interface Bird {
    canFly: boolean;
  }
  
  interface Superman extends Man, Bird {
    bodyType: string;
    origin: string;
  }
  
  // Do Not Edit The Code Below
  let creature: Superman = {
    title: "Superman",
    weight: 100,
    age: 500,
    canFly: true,
    bodyType: "Iron",
    origin: "Krypton"
  }
  