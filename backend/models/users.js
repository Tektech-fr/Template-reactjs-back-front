const connection = require("../db-config");
const db = connection.promise();

const findAll = () => {
	return db.query("SELECT * FROM users").then((res) => res[0]);
};

module.exports = { findAll };
