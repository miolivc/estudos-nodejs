
// Recupera o emissor de eventos a partir do modulo events
// EventEmitter é um objeto sincrono 
const EventEmitter = require("events").EventEmitter

// Cria uma instancia do emissor de eventos
let emitter = new EventEmitter()

// executa uma acao para quando o evento seja disparado
// on subscreve uma acao para o evento
emitter.on("newNumber", n => {
	console.log("Ação disparada pelo EventEmitter: " + n * 2)
})

// Usando o EventEmitter de forma asincrona
// Executado apos quem o chamou ser completado
// no caso, o for
emitter.on("newNumber", n => {
	setImmediate(() => console.log("Esse codigo esta executando de forma assincrona: " + n))
})

for (let i = 0; i < 10; i++) {
	console.log("Numero que disparou o evento: " + i)
	// dispara um evento para cada numero gerado
	// mudança no valor da variavel i 
	emitter.emit("newNumber", i)
}