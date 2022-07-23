const Joi = require("joi");
const jwt = require("jsonwebtoken");

const checkAuth = (req, res, next) => {
	const { error } = Joi.object({
		firstname: Joi.string().presence("required"),
		password: Joi.string().min(10).max(100).presence("required"),
	}).validate(req.body, { abortEarly: false });

	if (!error) {
		next();
	} else {
		res.status(400).json(error);
	}
};

module.exports = { checkAuth };
