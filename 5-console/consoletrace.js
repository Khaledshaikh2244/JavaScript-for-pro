
function functionA() {
    console.log("Inside functionA");
    functionB();
  }
  
  function functionB() {
    console.log("Inside functionB");
    functionC();
  }
  
  function functionC() {
    console.log("Inside functionC");
    console.trace(); // Log the stack trace
  }