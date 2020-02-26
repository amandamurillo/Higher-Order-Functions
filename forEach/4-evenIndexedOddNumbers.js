//Write a function called evenIndexedOddNumbers that when given an array of numbers as an argument, returns an array of only the odd numbers with even indices.

function evenIndexedOddNumbers(arr) {
  let newArr = [];
  arr.forEach(function(element, index){
    if(element % 2 !== 0 && index % 2 === 0){
      newArr.push(element)
    }
  });

  return newArr;
}



