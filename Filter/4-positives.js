//Write a function called positives that takes an array of numbers as a parameter and returns an array of only the numbers that are positive 

function positives(arr) {
  let filtered = arr.filter(function(element) {
    return Math.sign(element) === 1
  });

return filtered;
}