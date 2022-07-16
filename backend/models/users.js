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

const createUser = (user) => {
	return db.query(
		"INSERT INTO users (firstname, lastname, password, email, phone) VALUES (?, ?, ?, ?, ?)",
		[user.firstname, user.lastname, user.password, user.email, user.phone]
	);
};

module.exports = { findAll, findOne, createUser };
