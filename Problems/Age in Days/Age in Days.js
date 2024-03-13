// link problem --> https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/R
function AgeInDays(N) {
    let years = Math.floor(N / 365);
    let remainingDays = N % 365;
    let months = Math.floor(remainingDays / 30);
    let days = remainingDays % 30;

    return `${years} years\n${months} months\n${days} days`;
}

const N = 400; 
console.log(AgeInDays(N));


// const N = 800; 
// console.log(AgeInDays(N));


// const N = 30; 
// console.log(AgeInDays(N));


