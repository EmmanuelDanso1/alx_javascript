function numberOfTimes(x, theFunction) {
    for (let i = 0; i < x; i++) {
      theFunction();
    }
  }
  
  function xTimes() {
    console.log("C is fun");
  }
  
  numberOfTimes(3, xTimes);