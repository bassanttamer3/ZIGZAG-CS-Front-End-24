//https://www.codewars.com/kata/56f699cd9400f5b7d8000b55

function fixTheMeerkat(arr) {
   
    let temp = arr[0];
    arr[0] = arr[2];
    
    arr[2] = temp;
    
    return arr;
}