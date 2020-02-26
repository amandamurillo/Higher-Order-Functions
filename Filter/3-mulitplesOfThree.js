// Write a function called multiplesOfThree that takes an array of numbers as a parameter, and returns an array of only the numbers that are positive. 

function multiplesOfThree(arr) {
  let filtered = arr.filter(function(element) {
    return element % 3 === 0;
  });
  return filtered;
}