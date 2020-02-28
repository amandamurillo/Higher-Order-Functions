//Given an array of numbers, write a min and max function. Then, rewrite the function using reduce.


function max(arr) {
  let max = arr[0]
  arr.forEach(function(element){
    if (max < element) {
      max = element;
    }
  });
return max;
}

function min(arr) {
  let min = arr[0]
  arr.forEach(function(element){
    if (min > element) {
      min = element;
    }
  });
return min;
}


function max(arr) {
  let max = arr.reduce(function(acc,value){
    if (acc < value) {
      return value;
    } else {
      return acc;
    }
  })

  return max;
}

max([1, 3, 14, 44, 712])