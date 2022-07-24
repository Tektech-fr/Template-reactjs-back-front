const usersRouter = require("express").Router();
const users = require("../models/users");

usersRouter.get("/all", (req, res) => {
	users
		.findAll()
		.then((result) => {
			res.status(200).json(result);
		})
		.catch((err) => {
			console.error(err);
			res.status(500).json("Error requesting users.");
		});
});

usersRouter.get("/:id", (req, res) => {
	users
		.findOne(req.params.id)
		.then((result) => {
			res.status(200).json(result);
		})
		.catch((err) => {
			console.error(err);
			res.status(500).json("Error requesting user id.");
		});
});

usersRouter.post("/new", (req, res) => {
	users
		.createUser(req.body)
		.then(([result]) => {
			res.status(200).json({ ...req.body, id: result.insertId });
		})
		.catch((err) => {
			console.error(err);
			res.status(500).json("Error creating new user.");
		});
});

usersRouter.post("/auth", (req, res) => {
	users.findOneByName(req.body.username).then((result) => {
		return res.status(200).json(result);
	});
});

usersRouter.put("/:id", (req, res) => {
	console.log(req.body);
	users
		.updateUser(req.body, parseInt(req.params.id, 10))
		.then(([result]) => {
			if (result.affectedRows === 0) {
				res.jsonStatus(404);
			} else {
				res.status(201).json(`User ${req.body} successfully updated`);
			}
		})
		.catch((err) => {
			console.error(err);
			res.status(500).json("Error updating user.");
		});
});

usersRouter.delete("/:id", (req, res) => {
	users
		.deleteUser(req.params.id)
		.then(([result]) => {
			res.status(200).json(`User ${req.body} successfully deleted`);
		})
		.catch((err) => {
			console.error(err);
			res.status(500).json("Error deleting user.");
		});
});

module.exports = usersRouter;
