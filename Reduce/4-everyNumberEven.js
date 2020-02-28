//Write functions that can do the following:

//Given an array of numbers, determine if every one of them is odd.
function everyNumEven(arr) {
  let final = arr.every((function(element){
    return element % 2 === 0;
  }));
  return final;
}

everyNumEven([13, 17, -22, 47, 88])
everyNumEven([13, 17, 47])
everyNumEven([2, 4, 6, 200])

//==============================================

//Given an array of numbers, determine if every one of them is positive.

function everyNumPos(arr) {
  let final = arr.every((function(element){
    return Math.sign(element) === 1;
  }));
  return final;
}

everyNumPos([13, 17, -22, 47, 88])
everyNumPos([13, 17, 47])

//==============================================

//Given an array of strings, determine if every one of them has a length greater than 3.

function longerThanThree(arr) {
  let final = arr.every((function(element){
    return element.toString().length > 3;
  }));
  return final;
}

longerThanThree([13, 17, -22, 47, 88])
longerThanThree([133, 137, 497])
longerThanThree([11234, -3137, 2497])

//==============================================

//Given an array of strings, determine if every one of them contains the letter "e".
function containsE(arr) {
  let final = arr.every((function(element){
    return  element.includes('e');
  }));
  return final;
}

containsE(["the","easter", "he"])
containsE(["thy","easty", "try"])
containsE(["the","easty", "try"])





