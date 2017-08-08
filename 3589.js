function range(start, stop, step) {
  var arr = [];
  if (step === undefined) {
    step = 1;
  }
  if (stop === undefined) {
    stop = start;
    start = 0;
  }
  for (var i = start; i < stop; i += step) {
    arr[arr.length] = i;
  }
  return arr;
}

console.log(range(10));
console.log(range(1, 11));
console.log(range(0, 30, 5));
console.log(range(0, 10, 3));
console.log(range(0));