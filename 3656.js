'use strict'

const str = "{ \"name\": \"Вася\", \"age\": 35, \"friend\": { \"name\": \"Петя\", \"meetings\": [2013, 2015, 2016] } }";
const val = JSON.parse(str);

function deepCopy(val) {
  let result = {};
  for (let key in val) {
    if (!val.hasOwnProperty(key)) {
      break;
    }
    if (Array.isArray(key)) {
      result[key] = val[key];
    } else if (val[key] instanceof Object) {
      result[key] = deepCopy(val[key]);
    } else {
      result[key] = val[key];
    }
  }
  return result;
}

console.log(deepCopy(val));