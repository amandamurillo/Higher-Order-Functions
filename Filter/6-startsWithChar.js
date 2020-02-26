//Write a function called startsWithChar that accepts two parameters:an array of strings, and a character (e.g. "a"), and returns an array of only the strings that start with that character.

function startsWithChar(arr, char) {
let newArr = [];
  // loop thru array
arr.forEach(function(element){
  if(element[0].toLowerCase() == char.toLowerCase()){
    newArr.push(element)
  } 
});
return newArr;

}

//startsWithChar that accepts a string as a parameter

function startsWithChar(string, char) {
  
}