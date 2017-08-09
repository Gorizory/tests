function wrap(str, num) {
  var strFinal = '';
  var length = str.length;
  var start = 0;
  while (length > 0) {
    var numTemp = num;
    for (var i = 1; i < num / 4; i++) {
      if (str[start + num - i - 1] === ' ') {
        numTemp = num - i;
        break;
      }
    }
    strFinal += str.substr(start, numTemp);
    strFinal += '\n'
    length -= numTemp;
    start += numTemp;
  }
  return strFinal;
}

console.log(wrap("мама мыла раму", 11));
console.log(wrap("экскурсия", 4));