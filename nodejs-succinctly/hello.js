// Require recupera uma biblioteca externa
const http = require("http") 

/* server recebe uma funcao callback que atende requisições
 * do tipo HTTP e retorna o valor que foi definido para esta
 * abaixo, no caso o hello  world

 const server = http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type" : "text/html"})
	response.end("<h1 style='color: red'>Hello, baby!</h1>")
 });

 */
const server = http.createServer((request, response) => {
	response.writeHead(200, {"Content-Type" : "text/html"})
	response.end("<h1 style='color: red'>Hello, baby!</h1>")
})

// Coloca o servidor para 'ouvir a porta 8080'
server.listen(8080)
