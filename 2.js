function palindrome(str) {
  str = str.toLowerCase();
  var i, j;
  for (i = 0, j = str.length - 1; j - i > 1; i++, j--) {
    while (str[i] === ' ') {
      i++;
    }
    while (str[j] === ' ') {
      j--;
    }
    if (str[i] !== str[j]) {
      return false;
    }
  }
  return true;
}

console.log(palindrome("eye"));
console.log(palindrome("hello"));
console.log(palindrome("А роза упала на лапу Азора"));