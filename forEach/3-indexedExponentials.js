//Write a function called indexedExponentials that when given an array of numbers as an argument, returns a new array of numbers where each nimber has been raised to the power of its index, e.g. indexedExponentials([2, 5, 7, 4]) ; //=> [2^0, 5^1, 7^2, 4^3]


function indexedExponentials(arr) {
  let newArr = [];
  arr.forEach(function(element, index){
    newArr.push(Math.pow(element, index))
  });
  return newArr;
}

indexedExponentials([2, 5, 7, 4])