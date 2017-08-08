function randomNumber() {
  var num = Math.random();
  var t = Math.random();
  setTimeout(function () {}, t);
  return num;
}
console.log(randomNumber());