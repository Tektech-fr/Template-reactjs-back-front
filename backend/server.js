require("dotenv").config();

const express = require("express");
const connection = require("./db-config");
const setup = require("./routes");

const app = express();

const port = parseInt(process.env.SERVER_PORT ?? "5000", 10);

connection.connect((err) => {
	if (err) console.error("error connecting: " + err.stack);
	else
		console.log(
			`connected as id ${connection.threadId}. Keep it secret, we don't know where THEY are.`
		);
});

app.use(express.json());

setup(app);

app.listen(port, (err) => {
	if (err) {
		console.log("Something went wrong on server launch.");
	} else {
		console.log(`Server is ${port}°C hot baby`);
	}
});
