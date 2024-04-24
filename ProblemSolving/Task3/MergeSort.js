function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, middle);
    const rightHalf = arr.slice(middle);

    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);

    return merge(sortedLeft, sortedRight);
}

function merge(leftArr, rightArr) {
    let mergedArr = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] <= rightArr[rightIndex]) {
            mergedArr.push(leftArr[leftIndex]);
            leftIndex++;
        } else {
            mergedArr.push(rightArr[rightIndex]);
            rightIndex++;
        }
    }


    while (leftIndex < leftArr.length) {
        mergedArr.push(leftArr[leftIndex]);
        leftIndex++;
    }

    while (rightIndex < rightArr.length) {
        mergedArr.push(rightArr[rightIndex]);
        rightIndex++;
    }

    return mergedArr;
}


const arr = [1, 10, 5, 8, 7, 9];
const sortedArr = mergeSort(arr);
console.log(sortedArr); 
