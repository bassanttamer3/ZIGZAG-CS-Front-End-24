const arr = [1, 10, 5, 8, 7, 9];
function bubbleSort(arr) {
  let n = arr.length;
  let temp;
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return arr; 
}
const sortedArr = bubbleSort(arr);
console.log(sortedArr);
