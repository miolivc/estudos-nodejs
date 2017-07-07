
const app = require("express")()
const http = require("http").Server(app)
const io = require("socket.io")(http)

io.on("connection", socket => {
	socket.on("hello-client", data => console.log(data))
	socket.emit("hello-server", {message: "Hello! I am the server!"})
})

app.get("/", (request, response) => {
	response.sendFile(__dirname + "/index.html")
})

http.listen(8080)