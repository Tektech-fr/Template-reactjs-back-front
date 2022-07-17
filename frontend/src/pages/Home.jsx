import { useState, useEffect } from "react";
import axios from "axios";
import UserTable from "@comp/UserTable";
import AddUserForm from "@comp/AddUserForm";
import EditUserForm from "@comp/EditUserForm";

const App = () => {
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
							<AddUserForm />
						</>
					)}
				</section>

				<section>
					<h2>View users</h2>
					<UserTable users={users} editRow={editRow} />
				</section>
			</div>
		</main>
	);
};

export default App;
