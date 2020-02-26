//Write a function called evenIndexedEvenLengths that when given an array of strings as a parameter and returns only the strings that are found at an even index that also have even lengths. 

function evenIndexedEvenLengths(arr) {
  let newArr = [];
  arr.forEach(function(element, index){
    if(element.length % 2 == 0 && index % 2 === 0){
      newArr.push(element)
    }
  });

  return newArr;
}