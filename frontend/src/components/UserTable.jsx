import axios from "axios";

const UserTable = ({ users, editRow }) => {
	const deleteUser = (id) => {
		axios
			.delete(`http://localhost:5005/users/${id}`)
			.then((res) => console.log(res.data))
			.catch((err) => {
				console.warn(err.res.data);
			});
	};

	return (
		<table>
			<thead>
				<tr>
					<th>Firstname</th>
					<th>Lastname</th>
					<th>Email</th>
					<th>Phone</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				{users.length > 0 ? (
					users.map((user) => (
						<tr key={user.id}>
							<td>{user.firstname}</td>
							<td>{user.lastname}</td>
							<td>{user.email}</td>
							<td>{user.phone}</td>
							<td>
								<button
									onClick={() => {
										editRow(user);
									}}
								>
									Edit
								</button>
								<button onClick={() => deleteUser(user.id)}>Delete</button>
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
