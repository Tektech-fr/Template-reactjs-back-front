import { useState, useEffect } from "react";

const EditUserForm = ({ setEditing, currentUser, updateUser }) => {
	const [user, setUser] = useState(currentUser);

	const handleInputChange = (event) => {
		const { name, value } = event.target;

		setUser({ ...user, [name]: value });
	};

	useEffect(() => {
		setUser(currentUser);
	}, [currentUser]);

	return (
		<>
			<form
				id="EditUserForm"
				onSubmit={(event) => {
					event.preventDefault();

					updateUser(user.id, user);
				}}
			>
				<label>Firstname</label>
				<input
					type="text"
					name="firstname"
					value={user.firstname}
					onChange={handleInputChange}
				/>

				<label>Lastname</label>
				<input
					type="text"
					name="lastname"
					value={user.lastname}
					onChange={handleInputChange}
				/>

				<label>Password</label>
				<input
					type="text"
					name="password"
					value={user.password}
					onChange={handleInputChange}
				/>

				<label>Email</label>
				<input
					type="text"
					name="email"
					value={user.email}
					onChange={handleInputChange}
				/>

				<label>Phone</label>
				<input
					type="text"
					name="phone"
					value={user.phone}
					onChange={handleInputChange}
				/>
				<button>Update user</button>

				<button onClick={() => setEditing(false)}>Cancel</button>
			</form>
		</>
	);
};

export default EditUserForm;
