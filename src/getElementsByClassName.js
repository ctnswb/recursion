// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // initialize collection of elements with classname
  var elements = [];

  function checkClassName(element) {
    // if the element has a class that is className : element.classList.contains("class")
    if (element.classList && element.classList.contains(className)) {
      // add the element to the collection
      elements.push(element);
    }
    // get the children of the element
    var children = element.childNodes;
    // for each child
    for (var i = 0 ; i < children.length ; i++) {
      // check the class name
      checkClassName(children[i]);
    }
  }

  //starting, with the page body, check for class names
  checkClassName(document.body);

  return elements;

};