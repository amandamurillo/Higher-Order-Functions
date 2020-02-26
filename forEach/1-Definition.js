//Write forEach as a function


function forEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
  callback(arr[i], index)
  }
}

//modify the function so that it will work whether an array or an object is passed in as the parameter to the function


function forEach(coll, callback) {
  if (Array.isArray(coll)) {
    for(let i = 0; i < coll.length; i++) {
      callback(coll[i], index)
    }
  } else {
    for (let key in coll) {
      callback(coll[key], key)
    }
  }
}

//Callback invoked with 3 arguments:
//Array being called on
//current element
//index