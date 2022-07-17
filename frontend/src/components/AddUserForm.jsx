import { useState } from "react";

const AddUserForm = ({ user, addUser }) => {
	const initialFormState = {
		firstname: "",
		lastname: "",
		password: "",
		email: "",
		phone: "",
	};
	console.log(user);

	const [newUser, setNewUser] = useState(initialFormState);
	// console.log(newUser);

	const handleInputChange = (event) => {
		const { name, value } = event.target;

		setNewUser({ ...newUser, [name]: value });
	};

	if (!newUser) return "";

	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				if (
					!newUser.firstname ||
					!newUser.lastname ||
					!newUser.password ||
					!newUser.email ||
					!newUser.phone
				)
					return;

				// addUser(newUser);
				// setUser(initialFormState);
			}}
		>
			<label>Firstname</label>
			<input
				type="text"
				name="firstname"
				value={newUser.firstname}
				onChange={handleInputChange}
			/>

			<label>Lastname</label>
			<input
				type="text"
				name="lastname"
				value={newUser.lastname}
				onChange={handleInputChange}
			/>

			<label>Password</label>
			<input
				type="text"
				name="password"
				value={newUser.password}
				onChange={handleInputChange}
			/>

			<label>Email</label>
			<input
				type="text"
				name="email"
				value={newUser.email}
				onChange={handleInputChange}
			/>

			<label>Phone</label>
			<input
				type="text"
				name="phone"
				value={newUser.phone}
				onChange={handleInputChange}
			/>

			<button>Add new user</button>
		</form>
	);
};

export default AddUserForm;
