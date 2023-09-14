#!/usr/bin/node
// creating inner and outter functions with global variable

let globalVariable = 'Welcome';

// creating an outter function
function outer(){
    alert(globalVariable);

    // initializing a variable
    let course = 'Holberton';

    // creating an inner function
    
        function inner(){
            // using concatenation
            alert(globalVariable + " " + course);

            let exclamation = ' !';

            function inception(){
                alert(globalVariable + " " + course + exclamation)
            }
            inception();
        }
    inner();
}
outer();