//Write a function called keysLongerThan that accepts two parameters- an object and a number- and returns a new object with only the key/value pairs in the input object whose keys are longer than the numeric argument.

function keysLongerThan(obj, num) {
  let newObj = {};

  for(let key in obj) {
    if (key.length > num ) {
      newObj[key] = obj[key]
    }
  }
  return newObj;
}

