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

const updateUser = (user, id) => {
	return db.query(
		"UPDATE users SET firstname = ? lastname = ? password = ? email = ? phone = ? WHERE id = ?",
		[user.firstname, user.lastname, user.password, user.email, user.phone, id]
	);
};

const deleteUser = (id) => {
	return db.query("DELETE FROM users WHERE id = ?", [id]);
};

module.exports = { findAll, findOne, createUser, updateUser, deleteUser };
