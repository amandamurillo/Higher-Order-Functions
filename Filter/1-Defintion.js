//write filter as a function

function filter(arr, predicate) {
  let newArr= [];
  arr.forEach(function(element, index) {
    if (predicate(element, index)) {
      newArr.push(element);
    }
  });
  return newArr;
}


//Write a version of filter that works on arrays and objects

function filter(coll, predicate) {
  let newArr = [];
  let newObj = {};
  
  if (Array.isArray(coll)) {
    coll.forEach(function(element, index){
      if (predicate(element,index)) {
        newArr.push(element);
      }
    });
    return newArr;
  } else {
    for (let key in coll) {
      if (predicate(coll[key])) {
        newObj[key] = coll[key];
      }
    }
    return newObj;
  }
}