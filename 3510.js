const arr1 = [1, 2, 3, 4, 5]
const arr2 = [1, 5, 6, 7]
function arrSum(arr1, arr2) {
  var sum = arr1;
  for (var i = 0; i < arr2.length; i++) {
    var flag = 0;
    for (var j = 0; j < sum.length; j++) {
      if (sum[j] === arr2[i]) {
        flag = 1;
        break;
      }
    }
    if (flag === 0) {
      sum.splice(sum.length, 0, arr2[i]);
    }
  }
  return sum;
}
var sum = arrSum(arr1, arr2);
console.log(sum);