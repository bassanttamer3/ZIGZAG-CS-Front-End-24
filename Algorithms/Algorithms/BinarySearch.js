const num = [1, 4, 8, 9, 10, 12];

function binarySearch(arr, value) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (arr[middle] === value) {
            return middle; 
        } else if (value < arr[middle]) {
            end = middle - 1; 
        } else {
            start = middle + 1; 
        }
    }

    return -1; 
}


const Find = 10;
const index = binarySearch(num, Find);

if (index !== -1) {
    console.log(`Value ${Find} found at index ${index}`);
} else {
    console.log(`Value ${Find} not found in the array`);
}
