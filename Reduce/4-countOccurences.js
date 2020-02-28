//Write a function called countOccurences that, given a string and a character (a string with length 1) as parameters, returns the total number of times that character occurs in the string.


//input: str, str

countOccurences("thisis", "s")

function countOccurences(str, char) {
  let count = 0;
  for (let i in str) {
    if (str[i] === char) {
      count ++;

    }
  }
  return count;
}

