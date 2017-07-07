
const fs = require("fs")
const rl = require("readline")

let ui = rl.createInterface(process.stdin, process.stdout);

ui.question("> Insert a name for to add to list: ", (name) => {
	ui.close()

	let file = "list-names.txt"
	let encoding = "utf-8"

	fs.readFile(file, encoding, (err, data) => {
		
		if (! data) {
			data = name + "\n"
		} else if (! (data.toUpperCase().includes(name.toUpperCase()))){
			data += name + "\n"
		} else {
			console.log("> The name that you insert already exists in list!")
			return
		}
		
		fs.writeFile(file, data, encoding, (err) => {
			if (err) throw err
			console.log("> Names that were added: \n" + data)
		})
	})

})