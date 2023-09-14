#!/usr/bin/node
// using closures for alert

function welcomeMessage(fullName){
    // using the closure return function to accept input
    return function(){
        alert(`Welcome ${fullName}`);
    };
}
// creating variables and assigning names to variables

let guillaume = welcomeMessage('Guillaume');
let alex = welcomeMessage('Alex');
let fred = welcomeMessage('fred');

// calling the function
guillaume();
alex();
fred();