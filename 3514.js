var arr1 = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5];
var arr2 = [1,1,2,-2,5,2,4,4,-1,-2,5]
function find(arr){
  function sortNum(a, b) {
    if (a > b) {
      return 1;
    } else {
      return -1;
    }
  }
  arr.sort(sortNum);
  var prev = arr[0];
  var flag = false;
  for (var i = 0; i < arr.length; i++) {
    if (prev === arr[i]) {
      flag = !flag;
    } else {
      if (flag) {
        return prev;
      }
      prev = arr[i];
      flag = true;
    }
  }
}
console.log(find(arr1));
console.log(find(arr2));