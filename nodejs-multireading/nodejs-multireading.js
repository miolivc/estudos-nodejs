
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
	console.log("Principal process is active! " + process.pid);
	console.log("Number of CPUs: " + numCPUs)
  	// Fork workers.
  	for (let i = 0; i < numCPUs; i++) {
		  cluster.fork();
  	}

  	cluster.on('exit', (worker, code, signal) => {
    	console.log("Este Processo morreu!" + process.pid);
  	});
} else {
	console.log(`Worker ${process.pid} started`);
  	for (let i = 0; i < 10; i++) {
  		console.log("Process is active! PID: " + process.pid + "value: " + i);
  	}
}