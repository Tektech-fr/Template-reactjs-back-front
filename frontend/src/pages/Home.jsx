import { useState } from "react";
import UserTable from "@comp/UserTable";
import AddUserForm from "@comp/AddUserForm";
import EditUserForm from "@comp/EditUserForm";

const App = () => {
	const usersData = [
		{ id: 1, name: "Tania", username: "floppydiskette" },
		{ id: 2, name: "Craig", username: "siliconeidolon" },
		{ id: 3, name: "Ben", username: "benisphere" },
	];

	const initialFormState = { id: null, name: "", username: "" };

	const [users, setUsers] = useState(usersData);
	const [editing, setEditing] = useState(false);
	const [currentUser, setCurrentUser] = useState(initialFormState);

	const addUser = (user) => {
		user.id = users.length + 1;
		setUsers([...users, user]);
	};

	const deleteUser = (id) => {
		setUsers(users.filter((user) => user.id !== id));
	};

	const editRow = (user) => {
		setEditing(true);

		setCurrentUser({ id: user.id, name: user.name, username: user.username });
	};

	const updateUser = (id, updatedUser) => {
		setEditing(false);

		setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
	};

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
