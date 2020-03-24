let hello = function(name){
	console.log(`Hello %s!`, name || '');  // console.log(`Hello %d!`, name || '');
}


let bye = function(name){
	console.log('Bye %s!', name || '');
}

module.exports = {hello: hello, bye: bye};