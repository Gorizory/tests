function myReplace(str, before, after) {
  var result;
  var start = str.indexOf(before);
  result = str.slice(0, start);
  if (before[0].toUpperCase() === before[0]) {
    result += after[0].toUpperCase();
  } else {
    result += after[0].toLowerCase();
  }
  result += after.substring(1);
  result += str.substring(start + before.length);
  return result;
}
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"));
// "Let us get back to more Algorithms".
console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
// "A quick brown fox leaped over the lazy dog"