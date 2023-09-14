#!/usr/bin/node
// using timeout

// Logging to the console Start of the execution queue
console.log("Start of the execution queue");

// using setTimeout (with delay of 0)
setTimeout(function () {
  console.log("Final code block to be executed using setTimeout");
}, 0);

// Using a loop that iterates 100 times, each iteration logs to the console the iteration number
for (let i = 1; i <= 100; i++) {
  console.log(i);
}

console.log("End of the loop printing");
