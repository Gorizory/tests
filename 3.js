function chunkArrayInGroups(arr, size) {
  var result = [];
  if (size >= arr.length) {
    return arr;
  }
  var lilArr = 0;
  for (var i = 0; i < arr.length;) {
    result[lilArr] = [];
    for (var j = 0; j < size && i < arr.length; j++, i++) {
      result[lilArr][j] = arr[i];
    }
    lilArr++;
  }
  return result;
}
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups(["a", "b", "c", "d", "e"], 2));
console.log(chunkArrayInGroups(["a", "b", "c", "d", "e"], 3));