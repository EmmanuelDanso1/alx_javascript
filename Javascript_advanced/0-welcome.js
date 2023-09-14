#!/usr/bin/node
//  function that takes two argument and display with alert keyword

function welcome(firstName, lastName){
    // declaring a variable 
    const fullName = `${firstName} ${lastName}`;
    
    function displayFullName(){
        alert(`welcome ${fullName}!`)
    }
    displayFullName()
}
// calling the welcome function in order to execute the welcome argument
welcome();

