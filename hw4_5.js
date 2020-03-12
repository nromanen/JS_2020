'use stict'
function mul(){
    var tmp = 1;
    var count = 0;
    for(var i = 0; i < arguments.length; i++){
        if(typeof(arguments[i])==="number"){
            tmp *=arguments[i];
            count++;
        }
    }
    if(count==0) return 0;
    return tmp;

}
console.log(mul(1, "str", 2, 3, true));
console.log(mul(null, "str", false, true));