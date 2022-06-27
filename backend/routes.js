const baseRouter = require("./controllers/base");
const usersRouter = require("./controllers/users");

const setup = (app) => {
	app.use("/", baseRouter);
	app.use("/users", usersRouter);
};

module.exports = setup;
