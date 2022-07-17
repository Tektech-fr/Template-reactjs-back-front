import { useState } from "react";
import axios from "axios";

const AddUserForm = () => {
	const addUser = (user) => {
		axios
			.post(`http://localhost:5005/users/new`, {
				firstname: user.firstname,
				lastname: user.lastname,
				password: user.password,
				email: user.email,
				phone: user.phone,
			})
			.catch((err) => {
				console.warn(err.res.data);
			});
	};

	const initialFormState = {
		firstname: "",
		lastname: "",
		password: "",
		email: "",
		phone: "",
	};

	const [user, setUser] = useState(initialFormState);

	const handleInputChange = (event) => {
		const { name, value } = event.target;

		setUser({ ...user, [name]: value });
	};

	if (!user) return "";

	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				if (
					!user.firstname ||
					!user.lastname ||
					!user.password ||
					!user.email ||
					!user.phone
				)
					return;

				addUser(user);
				setUser(initialFormState);
			}}
		>
			{console.log(user)}

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

			<button>Add new user</button>
		</form>
	);
};

export default AddUserForm;
