
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

let fruits = ['lemon', 'orange', 'strawberry', 'banana', 'pineapple', 'apple']

if (cluster.isMaster) {

	for (let i = 0; i < numCPUs; i++) {
		cluster.fork();
	}

} else {

	setInterval(function() {
		for (var i = 0; i < fruits.length; i++) {
			console.log("process: " + process.pid + " > " + fruits[i])
		}
	}, 0)

	setInterval(function() {
		for (var i = 0; i < 10; i++) {
			console.log("process: " + process.pid + " > " + i )
		}
	}, 0)
}