'use strict'

const arr = [
  {name: 'width', value: 10},
  {name: 'height', value: 20}
];

function createObj(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    obj[arr[i].name] = arr[i].value;
  }

  return obj;
}

console.log(createObj(arr));