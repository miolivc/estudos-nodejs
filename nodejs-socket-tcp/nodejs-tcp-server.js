const net = require('net');

const server = net.createServer((socket) => {
	console.log("One connection has established!")
	socket.on('data', data => {
		console.log("The Client sended: " + data)
	})
	socket.write('Echo server\r\n');
	socket.pipe(socket); // Print in client the message received
});

server.listen(1337, '127.0.0.1');