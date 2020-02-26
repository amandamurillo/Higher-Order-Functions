//Write a function that can filter an object with values of mixed types to an object with only numeric values.

function onlyNumbers(obj) {
  let newObj = {};
  for (const key in obj) {
    if (typeof obj[key] === "number") {
      newObj[key] = obj[key]
    }
  }
  return newObj;
}

onlyNumbers({a:2, b:"tree", c:44, d:[1, 2, 3]})

