// https://www.codewars.com/kata/65c0161a2380ae78052e5731
function stonePick(arr) {
    let count = 0;
    let stick = 0;
    for(let i of arr)
      {
        if(i == "Sticks"){
          stick++;
        }
        else if(i== "Cobblestone"){
         count++; 
        }
        else if(i == "Wood"){
          stick += 4;
        }
      }  
    return Math.min(parseInt(count/3),parseInt(stick/2));
  }
  