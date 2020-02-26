// Write a function called evenLength that takes an array of strings and returns an array of only the strings with an even length

function evenLength(arr) {
  let filtered = arr.filter(function(element) {
    return (element.length % 2 === 0);
  });
  return filtered;
}