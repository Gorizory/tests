var str = "{ \"name\": \"Вася\", \"age\": 35, \"friend\": { \"name\": \"Петя\", \"meetings\": [2013, 2015, 2016] } }";
var val = JSON.parse(str);
function deepCopy(val) {
  var result = {};
  for (var key in val) {
    if (!val.hasOwnProperty(key)) {
      break;
    }
    if (Array.isArray(key)) {
      result[key] = val[key];
    } else if (typeof val[key] === 'object') {
      result[key] = deepCopy(val[key]);
    } else {
      result[key] = val[key];
    }
  }
  return result;
}
var result = deepCopy(val);
console.log(result);