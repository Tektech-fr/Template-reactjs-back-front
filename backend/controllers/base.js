const baseRouter = require("express").Router();

baseRouter.get("/", (req, res) => {
	res.status(200).send("base accepted");
});

module.exports = baseRouter;
