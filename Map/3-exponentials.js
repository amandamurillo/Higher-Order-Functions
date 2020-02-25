// Complete the function Exponentials that accepts an array of numbers as a parameter and raises each number n to the nth power.

function exponentials(arr) {
 let raised = arr.map(function(element) {
   return Math.pow(element, element);
 });
 return raised;
}