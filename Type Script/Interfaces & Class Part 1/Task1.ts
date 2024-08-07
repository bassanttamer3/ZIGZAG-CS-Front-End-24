interface Member {
    id: number;
    username: string;
    country?: string;
    readonly state: boolean;
    getName?: () => string;
  }
  let user: Member = {
    id: 100,
    username: "Elzero",
    state: true,
    getName() {
      return this.username;
    }
  }
  
  user.id = 200;
  user.id = "200"; // Type 'string' is not assignable to type 'number'
  user.state = false;