class Rectangle{
    constructor(w,h){

        this.width = w;
        this.height = h;

    }
    print(){
        if(this.width && this.height){
            for(let i = 0; i < this.height; i++){
                console.log('X'.repeat(this.width));
            }
        }
    }
};
 module.exports = Rectangle;