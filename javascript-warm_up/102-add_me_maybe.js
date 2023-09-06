#!/usr/bin/node
// function that increments and calls a function

function addMaybe(number, theFunction){
    number++;
    theFunction(number);
}

module.exports = {addMaybe: addMaybe};