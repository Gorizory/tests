'use strict'

function wrap(str, num) {
  let strFinal = '';
  let length = str.length;
  let start = 0;

  while (length > 0) {
    let numTemp = num;
    for (let i = 1; i < numTemp; i++) {
      if (str[start + num - i - 1] === ' ') {
        numTemp = num - i;
        break;
      }
    }
    strFinal += str.substr(start, numTemp);
    if (length > numTemp) {
      strFinal += '\n'
    }
    length -= numTemp;
    start += numTemp;
  }

  return strFinal;
}

console.log(wrap("мама мыла раму", 11));
console.log(wrap("экскурсия", 4));