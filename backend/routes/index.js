const baseRouter = require("./base");
const usersRouter = require("./users");

const setup = (app) => {
	app.use("/", baseRouter);
	app.use("/users", usersRouter);
};

module.exports = setup;
