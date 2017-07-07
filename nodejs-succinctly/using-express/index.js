
const express = require("express")
const app = express()

app.set("view engine", "jade")
app.set("views", "./views")

app.get("/hello", function (req, res) {
	res.render("hello", {
		title: "Fiz esse titulo com Jade",
		subtitle: "Fiz esse subtitulo com Jade"
	})
})

app.get("/", (request, response) => {
	res.send({
		title: "sasaaskajsak",
		subtitle: "dlsjdsldsdls"
	})
})

app.get("/other", (request, response) => {
	response.send("other", {
		title: "Pagina outra ai",
		subtitle: "Fiz esse subtitulo com Jade"
	})
})

app.listen(8080)

