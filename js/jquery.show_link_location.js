// showLinkLocation plugin goes here
// see plugin tutorial: http://learn.jquery.com/plugins/basic-plugin-creation/

// IIFE
// Anonymous function that has three arguments
//   These are "passed" in during the immediate execution, below.
// Provides local scoping and elminating namespace conflicts
(function(window, document, $) {

  // Your library code goes here
  // You can now reference the window, document, and jQuery objects in a local scope
  //   Using the variables you defined above.
  $.fn.showLinkLocation = function() {

    this.filter( "a" ).append(function() {
        return " (" + this.href + ")";
    });

    return this;

  };

}(window, document, window.jQuery)); // The global window, document, and jQuery objects are passed into the anonymous function
