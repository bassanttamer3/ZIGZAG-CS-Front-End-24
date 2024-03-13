///https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/W
function evaluateExpression(A, S, B, Q, C) {
    A = parseInt(A);
    B = parseInt(B);
    C = parseInt(C);

    if (S === '+') {
        return A + B === C ? "Yes" : A + B;
    } else if (S === '-') {
        return A - B === C ? "Yes" : A - B;
    } else if (S === '*') {
        return A * B === C ? "Yes" : A * B;
    }
}

function main(input) {
    const [A, S, B, Q, C] = input.split(' ');
    const result = evaluateExpression(A, S, B, Q, C);
    console.log(result);
}

const input1 = "5 + 10 = 15";
const input2 = "3 - 1 = 2";
const input3 = "2 * 10 = 19";

main(input1);
main(input2);
main(input3);
