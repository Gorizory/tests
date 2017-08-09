var str = 'Мама мыла раму';
function truncate(str, num) {
  var result;
  for (var i = num; str[i] !== ' '; i--) {
    if (i < 0) {
      return 'Word is not found';
    }
  }
  result = str.substr(0, i) + '...';
  return result;
}

console.log(truncate(str, 7));
console.log(truncate(str, 11));
