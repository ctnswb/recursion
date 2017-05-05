// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  // initiate final string stringified = ''

  // if object is a String
    // stringified = '"obj"'

  // if object is a Boolean
    // if true, stringified = 'true'
  // // else stringified = 'false'

  // if object is a Number
    // stringified = number.toString()

  // if object is an Array
    // add "[" to stringified
    // for each value in array
      // add stringifyJSON(value) to stringified
      // if its not the last value
        // add ", " to stringified
    // add "]" to stringified

  // if object is an Object
    // add "{" to stringified
    // for each key value pair
      // add "key" to stringified
      // add ":" to stringified
      // add stringifyJSON(obj[key]) to stringified
      // if its not the last key/value
        // add "," to stringified
    // add "}" to stringified

  // return final string

};

/* tests
var o = {"x":4 , "y":5};
var str = '';
for (var i in o) {
    str += '"';
    str += i;
    str += '"';
    console.log(str);

}
*/
