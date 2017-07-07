/* Chamado de callback hell
 * Chamadas assincronas que formam uma "Arvore"
 * Varias funcoes assincronas que são chamadas formando 
 * uma cadeia de chamadas
 */ 

function concat(a, b, callback) {
	setTimeout(function(){
		var r = a + b
		callback(r)
	}, 0)
}

function upper(a, callback) {
	setTimeout(function (){
		var r = a.toUpperCase()
		callback(r)
	}, 0)
}

function decorate(a, callback) {
	setTimeout(function (){
		var r = "*" + a + "*"
		callback(r)
	}, 0)
}

concat("Hello, ", "Michelle", r1 => {
	upper(r1, r2 => {
		decorate(r2, r3 =>{
			console.log(r3)
		})
	})
})