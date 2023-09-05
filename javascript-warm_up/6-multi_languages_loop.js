// const languages = ['C is fun','Python is cool','JavaScript is amazing'];

// // using for loop to iterate the array
// for(const language of languages){
//     console.log(language);
// }

const lines = [
    "C is fun",
    "Python is cool",
    "JavaScript is amazing"
  ];
  
  function printLines(index) {
    if (index < lines.length) {
      console.log(lines[index]);
      printLines(index + 1);
    }
  }
  
  printLines(0);