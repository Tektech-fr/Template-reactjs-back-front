const usersRouter = require("express").Router();

usersRouter.get("/", (req, res) => {
	res.status(200).send("users route ready");
});

module.exports = usersRouter;
