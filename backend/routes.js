const usersRouter = require("./controllers/users");
// const authRouter = require("./controllers/auth");

const setup = (app) => {
	app.use("/users", usersRouter);
	// app.use("/auth", authRouter);
};

module.exports = { setup };

