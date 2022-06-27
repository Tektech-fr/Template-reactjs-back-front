const usersRouter = require("express").Router();
const users = require("../models/users");

usersRouter.get("/", (req, res) => {
	users
		.findAll()
		.then((result) => {
			res.status(200).send(result);
		})
		.catch((err) => {
			console.log(err);
			res.send("Error ");
		});
});

module.exports = usersRouter;
