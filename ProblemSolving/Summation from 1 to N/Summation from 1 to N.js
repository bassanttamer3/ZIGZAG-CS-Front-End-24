//https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/G
function sum(n){
let sum = 0;
for(let i =0; i<=n ;i++){
    sum += i;
}
return sum;
}

console.log(sum(2));
console.log(sum(3));
console.log(sum(10));