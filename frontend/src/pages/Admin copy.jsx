import { useState, useEffect } from "react";
import axios from "axios";
import UserTable from "@comp/UserTable";
import AddUserForm from "@comp/AddUserForm";
import EditUserForm from "@comp/EditUserForm";

const Admin = () => {
	const [users, setUsers] = useState([]);
	const [editing, setEditing] = useState(false);
	const [currentUser, setCurrentUser] = useState();

	useEffect(() => {
		axios
			.get("http://localhost:5005/users/all")
			.then((res) => setUsers(res.data))
			.catch((err) => {
				console.warn(err.res.data);
			});
	}, []);

	const addUserToState = (newUser) => {
		setUsers([...users, newUser]);
	};

	const editRow = (user) => {
		setEditing(true);

		setCurrentUser({
			id: user.id,
			firstname: user.firstname,
			lastname: user.lastname,
			password: user.password,
			email: user.email,
			phone: user.phone,
		});
	};

	const updateUser = (id, updatedUser) => {
		setEditing(false);

		axios
			.put(`http://localhost:5005/users/${id}`, updatedUser)
			.then(() => console.log("all ok"))
			.catch((err) => {
				console.warn(err.res.data);
			});
	};

	return (
		<div id="MainAdmin">
			<h1>CRUD APP</h1>
			<div className="container">
				<section>
					{editing ? (
						<>
							<h2>Edit user</h2>
							<EditUserForm
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</>
					) : (
						<>
							<h2>Add user</h2>
							<AddUserForm addUserToState={addUserToState} />
						</>
					)}
				</section>

				<section>
					<h2>View users</h2>
					<UserTable users={users} editRow={editRow} />
				</section>
			</div>
		</div>
	);
};

export default Admin;
