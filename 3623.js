var arr = [
  {name: 'width', value: 10},
  {name: 'height', value: 20}
];
var obj = {};
for (var i = 0; i < arr.length; i++) {
  obj[arr[i].name] = arr[i].value;
}
console.log(obj);