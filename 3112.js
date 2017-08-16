'use strict'

const arr = [1, 2, 3, 4, 5];
function drop(arr, i) {
  let newArr = Array.from(arr);
  newArr.splice(i, 1);
  return newArr;
}
let newArr = drop(arr, 3) // [1, 2, 3, 5]
console.log(newArr);
