// Read Synchrously
var fs = require("fs");
console.log("\n *START* \n");
var contents = fs.readFileSync("user.json");
//console.log("Output Content : \n"+ content);
 var jsonContent = JSON.parse(contents);
// Get Value from JSON
 //console.log("User Name:", jsonContent.username);
 ////console.log("Email:", jsonContent.email);
 //console.log("Password:", jsonContent.password);
 

jsonContent.forEach(function(key, index){
  console.log(key.email);
  console.log(key.username); 
});

for (let key in jsonContent){
	console.log(jsonContent[key]);
}

for (let key of jsonContent){
	console.log(key);
}
 
 
 
 
console.log("\n *EXIT* \n");//