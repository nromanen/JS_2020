var user ={
    name:"Tom" ,
    format:function(beginMsg, endMsg){
    console.log(beginMsg + this.name + endMsg);
}
};
var tomFormat=function (beginMsg, endMsg){
    user.format(beginMsg, endMsg);      
};
//var tomFormat = user.format.bind(user);
tomFormat("<<<", ">>>");
