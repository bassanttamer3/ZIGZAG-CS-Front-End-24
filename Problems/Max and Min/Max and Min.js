//https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/K
function minAndmax(A, B, C) {
    let min;
    let max;
    
    if (A < B && A < C) {
        min = A;
    } else if (B < A && B < C) {
        min = B;
    } else {
        min = C;
    }

    if (A > B && A > C) {
        max = A;
    } else if (B > A && B > C) {
        max = B;
    } else {
        max = C;
    }

    return [min, max];
}

const [min, max] = minAndmax(1, 2, 3);
console.log("Minimum:", min);
console.log("Maximum:", max);
 
//second solution
// function minAndmax(A, B, C) {
//     let min;
//     let max;
//     min = Math.min(A, B, C);
//     max = Math.max(A, B, C);
//     return [min, max];
// }