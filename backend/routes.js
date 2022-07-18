const usersRouter = require("./controllers/users");

const setup = (app) => {
	app.use("/users", usersRouter);
};

module.exports = { setup };

