'use strict'
function mp3(model, memory){
    return{
        model: model,
        memory: memory,
        displayInfo: function(){
            console.log(this.model + "" + this.memory);
        }
    }
}
var play = mp3("samsung ", "16Gb");
play.displayInfo();