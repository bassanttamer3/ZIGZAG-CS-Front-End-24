function insane(num: number) {
    return Game.Hard - num;
  }
  
  enum Game {
    Easy = 100,
    Medium = Game.Easy - 20,
    Hard = Math.floor(Game.Medium - (Game.Easy / 2)),
    Insane = insane(10)
  }
  
  // Output
  console.log(Game.Easy);    // Output: 100
  console.log(Game.Medium);  // Output: 80
  console.log(Game.Hard);    // Output: 30
  console.log(Game.Insane);  // Output: 20
  