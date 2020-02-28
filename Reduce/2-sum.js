//Given an array of numbers, write sum function. Then, rewrite using reduce.

function sum(arr) {
  let total = 0;
  arr.forEach(function(element) {
    total += element;
  });
  return total; 
}

function sum(arr) {
  let total = arr.reduce(function(acc,value){
    return acc + value;
  });
  return total;
}


sum([1, 3, 100])