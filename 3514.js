'use strict'

const arr1 = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5];
const arr2 = [1,1,2,-2,5,2,4,4,-1,-2,5]

function find(arr){
  let newArr = Array.from(arr);
  newArr.sort((a, b) => {
    if (a > b) {
      return 1;
    } else {
      return -1;
    }
  });
  let prev = newArr[0];
  let flag = false;
  for (let i = 0; i < newArr.length; i++) {
    if (prev === newArr[i]) {
      flag = !flag;
    } else {
      if (flag) {
        return prev;
      }
      prev = newArr[i];
      flag = true;
    }
  }
}

console.log(find(arr1));
console.log(find(arr2));