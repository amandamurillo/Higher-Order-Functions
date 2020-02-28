//Write a function every that takes two parameters: an array and a predicate. Every should return true if the predicate is true for every element in the array.

function every(arr, pred) {
  let final = arr.reduce(function(acc, value) {
    return acc && pred(value)
  }, true);

  return final;
}


function isOdd (num) {
  return num % 2 !== 0;
}

every([1, 2, 3, 4], isOdd)
every([1, 3, 17], isOdd)


