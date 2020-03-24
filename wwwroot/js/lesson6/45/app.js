
let greetings = require('./greetings')
let hola = require('./hola')

greetings.hello();
hola('First ');

require('./greetings').bye('second');
setTimeout(()=> console.log('dddd'), 0);
console.log(__dirname);


