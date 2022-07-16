const usersRouter = require("express").Router();
const users = require("../models/users");

usersRouter.get("/all", (req, res) => {
	users
		.findAll()
		.then((result) => {
			res.status(200).send(result);
		})
		.catch(() => {
			res.status(500).send("Error requesting users.");
		});
});

usersRouter.get("/:id", (req, res) => {
	users
		.findOne(req.params.id)
		.then((result) => {
			res.status(200).send(result);
		})
		.catch(() => {
			res.status(500).send("Error requesting user id.");
		});
});

usersRouter.post("/new", (req, res) => {
	users
		.createUser(req.body)
		.then(([result]) => {
			res.status(200).send({ ...req.body, id: result.insertId });
		})
		.catch(() => {
			res.status(500).send("Error creating new user.");
		});
});

module.exports = usersRouter;
