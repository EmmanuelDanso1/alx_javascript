function numberOfTimes(x, theFunction) {
    for (let i = 0; i < x; i++) {
      theFunction();
    }
  }
  
  function xTimes() {
    console.log("Where I am!");
  }
  
  numberOfTimes(5, xTimes);