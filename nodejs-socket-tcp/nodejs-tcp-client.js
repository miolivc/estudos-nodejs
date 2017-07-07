
const net = require('net');

const client = new net.Socket();
client.connect(1337, '127.0.0.1', () => {
	console.log('Connected');
	client.write('Hello, server! I am a Client.');
});

client.on('data', (data) => {
	console.log('Received: ' + data);
	client.destroy(); // kill client after server's response
});

client.on('close', () => {
	console.log('Connection closed');
});

