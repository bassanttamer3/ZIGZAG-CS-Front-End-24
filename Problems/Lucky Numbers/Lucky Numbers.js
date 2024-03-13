//https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/M
function luckyNumbers(n, c) {
    if (n % 4 === 0 && c % 4 === 0)
        return "4 7";
    else if (n % 7 === 0 && c % 7 === 0)
        return "4 7";
    else if (n % 4 === 0 && c % 7 === 0)
        return "4 7";
    else if (n % 7 === 0 && c % 4 === 0)
        return "4 7";
    else
        return "-1";
}

console.log(luckyNumbers(4, 20));
console.log(luckyNumbers(8 ,15));