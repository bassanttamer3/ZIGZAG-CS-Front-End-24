// https://www.codewars.com/kata/5865918c6b569962950002a1
function strCount(str, letter) {
    let count = 0;
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }
    
    return count;
}