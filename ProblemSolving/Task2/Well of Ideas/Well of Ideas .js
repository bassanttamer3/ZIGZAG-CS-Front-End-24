//https://www.codewars.com/kata/57f222ce69e09c3630000212
function well(x) {
    let goodIdeasCount = 0;

    for (let i = 0; i < x.length; i++) {
        if (x[i] === 'good') {
            goodIdeasCount++;
        }
    }
    
    if (goodIdeasCount === 0) {
        return 'Fail!';
    } else if (goodIdeasCount <= 2) {
        return 'Publish!';
    } else {
        return 'I smell a series!';
    }
}
