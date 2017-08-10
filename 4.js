function sumAll(arr) {
  var sum = 0;
  var start, stop;
  if (arr[0] < arr[1]) {
    start = arr[0];
    stop = arr[1];
  } else {
    start = arr[1];
    stop = arr[0];
  }
  for (var i = start; i <= stop; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumAll([1, 4])); // 10 (1+2+3+4)
console.log(sumAll([10, 5])); // 45 (10+9+8+7+6+5)