import { useState, useEffect } from "react";
import axios from "axios";

const UserTable = () => {
	const [users, SetUsers] = useState();

	useEffect(() => {
		axios
			.get("http://localhost:5005/users/all")
			.then((res) => {
				console.log(res.data);
				SetUsers(res.data);
			})
			.catch((error) => {
				console.warn(error.response.data);
			});
	}, []);

	if (!users) return "searching";

	return (
		<table>
			<thead>
				<tr>
					<th>FirstName</th>
					<th>LastName</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				{users.length > 0 ? (
					users.map((user) => (
						<tr key={user.id}>
							<td>{user.firstname}</td>
							<td>{user.lastname}</td>

							<td>
								<button>Edit</button>
								<button>Delete</button>
							</td>
						</tr>
					))
				) : (
					<tr>
						<td>No users</td>
					</tr>
				)}
			</tbody>
		</table>
	);
};

export default UserTable;
