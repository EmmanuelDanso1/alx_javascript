#!/usr/bin/node
class Rectangle{
    constructor(w, h){
        if(w > 0 && h > 0){
            this.width = w;
            this.height = h;
        }
        // checking f w or h is equal to 0 or not a positive integer, create an empty object
        else{
            this.width = undefined;
            this.height = undefined;
        }
    }
}

module.exports = Rectangle;