require("dotenv").config();

const express = require("express");

const app = express();
const port = parseInt(process.env.SERVER_PORT ?? "5000", 10);

app.use((req, res) => {
	res.json({ message: "Request read" });
});

app.listen(port, (err) => {
	if (err) {
		console.log("Something went wrong on server launch.");
	} else {
		console.log(`Server is ${port}°C hot baby`);
	}
});
