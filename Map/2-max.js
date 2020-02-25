//Write a function Max that when given an array of numbers, computes the maximum number in that array

function max(arr) {
  let largest = arr[0];
  arr.forEach(function(element) {
    if (largest < element) {
      largest = element;
    }
  });
  return largest;
}

// find the maximum in an array of arrays

const sampleInput = [[1, 3, 2], [4, 23, 100], [-2, 7, 6, 3]]

function maximums(arr){
  let final = arr.map(function(element) {
    return max(element);
  });
  return final;
}

  