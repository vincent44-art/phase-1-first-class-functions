function receivesAFunction(callback) {
    // Call the callback function
    callback();
  }
  receivesAFunction(() => console.log("Callback called!"));
// Output: "Callback called!"
function returnsANamedFunction() {
    // Define a named function
    function namedFunction() {
      console.log("This is a named function!");
    }
    // Return the named function
    return namedFunction;
  }
  const myFunction = returnsANamedFunction();
myFunction(); // Output: "This is a named function!"
function returnsAnAnonymousFunction() {
    // Return an anonymous function
    return function () {
      console.log("This is an anonymous function!");
    };
  }
  
  // 2. returnsANamedFunction
  function returnsANamedFunction() {
    function namedFunction() {
      console.log("This is a named function!");
    }
    return namedFunction;
  }
  
  // 3. returnsAnAnonymousFunction
  function returnsAnAnonymousFunction() {
    return function () {
      console.log("This is an anonymous function!");
    };
  }