//Write a function called evens that takes an array of numbers as a parameter, and returns an array of only the even numbers.

function evens(arr) {
  let evenArr = arr.filter(function(element) {
    return element % 2 === 0;
  });
  return evenArr;
}