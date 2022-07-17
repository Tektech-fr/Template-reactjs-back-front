import { useState, useEffect } from "react";
import axios from "axios";
import UserTable from "@comp/UserTable";
import AddUserForm from "@comp/AddUserForm";
import EditUserForm from "@comp/EditUserForm";

const App = () => {
	const initialFormState = { id: null, name: "", username: "" };

	const [users, setUsers] = useState();
	const [editing, setEditing] = useState(false);
	const [currentUser, setCurrentUser] = useState(initialFormState);

	useEffect(() => {
		axios
			.get("http://localhost:5005/users/all")
			.then((res) => setUsers(res.data))
			.catch((err) => {
				console.warn(err.res.data);
			});
	}, []);

	const addUser = (newUser) => {
		// user.id = users.length + 1;
		// setUsers([...users, user]);
		axios.post(`http://localhost:5005/users/new`, { newUser }).catch((err) => {
			console.warn(err.res.data);
		});
	};

	const deleteUser = (id) => {
		axios.delete(`http://localhost:5005/users/${id}`).catch((err) => {
			console.warn(err.res.data);
		});
	};

	const editRow = (user) => {
		setEditing(true);

		setCurrentUser({ id: user.id, name: user.name, username: user.username });
	};

	const updateUser = (id, updatedUser) => {
		setEditing(false);

		setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
	};

	if (!users) return "";

	return (
		<main id="MainHome">
			<h1>CRUD App with Hooks</h1>
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
							<AddUserForm addUser={addUser} />
						</>
					)}
				</section>

				<section>
					<h2>View users</h2>
					<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
				</section>
			</div>
		</main>
	);
};

export default App;
