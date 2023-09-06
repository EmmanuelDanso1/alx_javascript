#!/usr/bin/node
// adding a new function incr that increments the integer value
const myObject = {
    type: 'object',
    value: 12,
    incr: ()=>{
      this.value++;
    }
  };
console.log(myObject)