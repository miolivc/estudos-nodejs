
const express = require("express")
const app = express()
const db = require("./postgres")

let films = db()

app.get("/", (request, response) => {
	response.send(films.forEach(film => {
		"<h1>" + film + "</h1>"
	}))
})

app.listen(8080)