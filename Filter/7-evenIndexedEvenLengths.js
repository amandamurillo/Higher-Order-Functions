//Write a function called evenIndexedEvenLengths that accepts an array of strings as a parameter, and returns only the strings that are found at an even index that also have an even length. 

function evenIndexedEvenLengths(arr) {
  let filteredArr = arr.filter(function(element, index){
    return element.length % 2 === 0 && index % 2 === 0 
  });

  return filteredArr;
}

evenIndexedEvenLengths(['this', 'cat', 'meow','go','now', 'yum', 'ye']) 