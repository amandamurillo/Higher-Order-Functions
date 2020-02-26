// Create a function called reduce. This funtion will reduce an array or object to a single value bu repetitvely calling iterator (accumulator, item) for each item. Accumulator should be the return value of the previous iterator call.


function reduce(arr, callback, start) {
  let acc = start;
  arr.forEach(function(element, index) {
    acc = callback(acc, element, index)
  });
  return acc;
}

// function reduce(coll, callback, start) {
//   let acc = start;
//   each(coll, function(element, index) {
//     acc = callback(acc, element, index)
//   });
//   return acc;
// }


