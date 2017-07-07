
const pg = require("pg")
const connString = "postgres://postgres:postgres@localhost:5432/films"

module.exports = () => {
	pg.Client(connString, (err, client) => {
		if (client == undefined) console.log("hashahsahsahsha")
		client.query("SELECT * FROM MOVIES", (err, query) => {
			return result.rows
		})
	})
}
