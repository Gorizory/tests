'use strict'

function range(start, stop, step = 1) {
  let arr = [];
  if (stop === undefined) {
    stop = start;
    start = 0;
  }

  for (let i = start; i < stop; i += step) {
    arr[arr.length] = i;
  }

  return arr;
}

console.log(range(10));
console.log(range(1, 11));
console.log(range(0, 30, 5));
console.log(range(0, 10, 3));
console.log(range(0));