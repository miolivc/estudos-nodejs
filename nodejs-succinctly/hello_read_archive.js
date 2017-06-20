
const http = require("http")
const fs = require("fs") //sistema de arquivos I/O file(modulo)

const server = http.createServer((request, response) => {
	response.writeHead(200, {"Content-Type" : "text/html"})
	
	/* Faz a abertura do arquivo de forma síncrona e 
	 * e quando esta é concluída, executa a funcao 
	 * da fila de tarefas, no caso a que contem o envio
	 * da resposta ao cliente (response.end(file))
	 */

	// Essa funcao recebe um callback com 2 parametros
	fs.readFile("./hello.html", (err, file) => {
		response.end(file)
	})
})

server.listen(8080)