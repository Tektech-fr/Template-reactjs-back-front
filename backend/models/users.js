const connection = require("../db-config");
const db = connection.promise();

const findAll = () => {
	return db
		.query("SELECT firstname, lastname, email, phone FROM users ")
		.then(([res]) => res);
};

const findOne = (id) => {
	return db
		.query("SELECT firstname, lastname, email, phone FROM users WHERE id = ?", [
			id,
		])
		.then(([res]) => res[0]);
};

module.exports = { findAll, findOne };
