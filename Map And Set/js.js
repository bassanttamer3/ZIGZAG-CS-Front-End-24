//01
  let setOfNumbers = new Set([10]);
  setOfNumbers.add(20).add(setOfNumbers.size);
  console.log(setOfNumbers);
  console.log(Array.from(setOfNumbers)[2]);
  console.log("---------------------------------------")


//02
let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
console.log(new Set(myFriends.sort()));
console.log("---------------------------------------")


//03
let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};
let mapmyInfo = new Map(Object.entries(myInfo));
console.log(mapmyInfo);
console.log(mapmyInfo.size);
console.log(mapmyInfo.has('role'));
console.log("---------------------------------------");


//04
let theNumber = 100020003000;
console.log(Number([...new Set(theNumber.toString())].sort().join('')));
console.log("---------------------------------------");

//05
let theName = "Elzero";
let array1 = theName.split('');
console.log(array1);

let array2 = Array.from(theName);
console.log(array2);

let array3 = [...theName];
console.log(array3);

let array4 = Object.assign([], theName);
console.log(array4);


let array5 = [];
for (let char of theName) {
    array5.push(char);
}
console.log(array5);
console.log("---------------------------------------");
//06
let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
chars.copyWithin(3,0);
console.log(chars);


let chars2 = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
chars2.sort();
chars2.copyWithin(0,4,8);
console.log(chars2);


let chars3 = ["Z", "Y", "A", "D", "E", 10, 1];
chars3.copyWithin(4,2,5);
chars3.copyWithin(2,0,2);
console.log(chars3);
console.log("---------------------------------------");
//07
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];
let snum = [...numsOne,...numsTwo];
console.log(snum);
console.log("---------------------------------------");

//08
let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];
console.log(Number(Math.max(...n1))* [...n1,...n2].length);
