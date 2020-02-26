//Write a function called incrementValues that accepts an object as a parameter and outputs an object with all of its numeric values incremented by one. 


function incrementValues(obj) {

  let newObj = {};
  //check type of each value
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      newObj[key] = obj[key] + 1;
    }
  }
  return newObj;
}

incrementValues({a:2, b: -100, c:4, d: "cat", e: ["the", 3] })