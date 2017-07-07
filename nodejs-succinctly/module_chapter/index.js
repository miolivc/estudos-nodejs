
const greet = require("./greeter")
greet("Michelle")

const user = require("./export_object")
console.log("Name:" + user.name + " " + user.surname +
	"\n" + "Age: " + user.age)

const date = require("./date")
console.log("Data de hoje: " + date())