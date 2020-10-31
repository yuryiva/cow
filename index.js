const data = require('./information');


var cowsay = require("cowsay");

console.log(cowsay.say({
	text : "Hello, I'm " + data.name + " from campus " + data.campus + ".",
	e : "oO",
	T : "U "
}));
