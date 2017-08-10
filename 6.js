function invert_key_value(obj) {
  var key;
  var newObj = {};
  for (key in obj) {
    if (!obj.hasOwnProperty(key)) {
      continue;
    }
    newObj[obj[key]] = key;
  }
  return newObj;
}
console.log(invert_key_value({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));
// {#00FF00: "green", #FF0000: "red", #FFFFFF: "white"}