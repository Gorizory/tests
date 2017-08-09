function sum(num) {
  var curSum = num;
  function fun(n) {
    curSum += n;
    return fun;
  }
  fun.toString = function () {
    return curSum;
  }
  return fun;
}

console.log("%s", sum(1));
console.log("%s", sum(1)(2));
console.log("%s", sum(1)(2)(3));
