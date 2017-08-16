'use strict'

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 5, 6, 7];
function arrSum(arr1, arr2) {
  let sum =  arr1.concat(arr2);
  for (let i = 0; i < sum.length; i++) {
    let j = sum.lastIndexOf(sum[i])
    if(j !== i) {
      sum.splice(j, 1);
    }
  }
  return sum;
}
let sum = arrSum(arr1, arr2);
console.log(sum);