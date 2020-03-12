'use strict'
function Mp3(model, memory){
    this.model = model;
    this.memory = memory;
    this.displayInfo = function(){
        console.log(this.model + "" +this.memory);
    };
}
var samsung = new Mp3 ("samsung ", "16Gb");
samsung.displayInfo();