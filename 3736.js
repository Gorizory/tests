var str = "AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB";
function rle(str) {
  var result = '';
  var prev = '';
  var count = 0;
  for (var i = 0; i <= str.length; i++) {
    if (str[i] < 'A' || str[i] > 'Z') {
      throw new SyntaxError("Incorrect string");
    }
    if (count === 0) {
      prev = str[i];
      count = 1;
      continue;
    }
    if (str[i] === prev) {
      count++;
    } else {
      result += prev + count;
      prev = str[i];
      count = 1;
    }
  }
  return result;
}
console.log(rle(str));