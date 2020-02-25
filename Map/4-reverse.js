//Write a function called Reverse that accepts a string as a parameter and returns a revered version of that string.


function reverse(str) {
  let splitStr = str.split("")
  return splitStr.reverse().join("");
}

//without using HOF's...

function reverse(str) {
  let revStr = "";
  for(let i= str.length -1; i >= 0; i--) {
    revStr += str[i];
  }
  return revStr;
}

//Use reverse to write a function called reverseWords that accepts a string as an argument, and returns a string with all of its words reversed. reversedWords should reverse each word individually, not the entire thing. 

function reverseWords(str) {
const splitStr = str.split(" ");
let revWord= reverse(splitStr)

return revWord;
}