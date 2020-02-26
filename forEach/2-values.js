//Using forEach, write the following functions:
//values: accepts an object as a parameter and outputs an array of the object's values
//keys: accepts an object as a parameter and outputs an array of the object's keys

function values(obj) {
let newArr= [];
  for (let key in obj) {
  newArr.push(obj[key]);
  }
return newArr;
}

function keys(obj) {
  let newArr = [];
  for (let key in obj) {
    newArr.push(key)
  }
  return newArr;
  //Alternatively,
  //return obj.keys(obj)
}


values({a:2, b:"tree", c:44, d:[1, 2, 3]})

keys({a:2, b:"tree", c:44, d:[1, 2, 3]})