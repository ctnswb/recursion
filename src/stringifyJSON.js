// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  // initiate final string stringified = ''
  var stringified = '';

  // if object is null
  if (obj === null) {
    //stringified = null
    stringified = 'null';
  }

  // if object is a function
  else if (obj === 'undefined') {
    //stringified = null
    stringified = 'null';
  }

  // if object is undefined
  else if (obj === 'function') {
    //stringified = null
    stringified = 'null';
  }

  // if object is a String
  else if (typeof obj === 'string') {
    // stringified = '"obj"'
    stringified = '"'+ obj + '"';
  }

  // if object is a Boolean
  else if (typeof obj === 'boolean') {
    // if true, stringified = 'true'
    if (obj) {
      stringified = 'true';
    } else {
      // else stringified = 'false'
      stringified = 'false';
    }
  }

  // if object is a Number
  else if (typeof obj === 'number') {
    // stringified = number.toString()
    stringified = obj.toString();
  }

  // if object is an Array
  else if (Array.isArray(obj)) {
    // add "[" to stringified
    stringified += '[';
    // for each value in array up to the 2nd to last value
    for (var i = 0 ; i < obj.length ; i++) {
      // add stringifyJSON(value) to stringified
      stringified += stringifyJSON(obj[i]);
      // if its not the last value
      if (i < obj.length - 1) {
        // add ", " to stringified
        stringified += ',';
      }
    }
    // add "]" to stringified
    stringified += ']';
  }


  // if object is an Object
  else if (typeof obj === 'object') {
    // add "{" to stringified
    stringified += '{';
    // for each key value pair
    for (var key in obj) {
      // skip functions and undefined keys
      if (key === 'functions' || key === 'undefined') {

      } else {
        // add "key" to stringified
        stringified += stringifyJSON(key);
        // add ":" to stringified
        stringified += ":";
        // add stringifyJSON(obj[key]) to stringified
        stringified += stringifyJSON(obj[key]);
        // add "," to stringified
        stringified += ","
      }

    }
    // remove the extra comma at the end
    if (stringified[stringified.length - 1] === ',') {
      stringified = stringified.slice(0, stringified.length - 1);
    }
    // add "}" to stringified
    stringified += '}';
  }


  // else stringified = 'null';
  else {
    stringified = 'null';
  }

  // return final string
  return stringified;

};
