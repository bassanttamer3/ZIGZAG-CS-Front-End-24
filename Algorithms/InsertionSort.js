const num = [80, 90, 60, 30, 50, 70, 40];

function insertionSort(arr) {
    const n = arr.length;

    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }

        arr[j + 1] = key;
    }

    return arr;
}

let sortedarr = insertionSort(num.slice());
console.log(sortedarr);
