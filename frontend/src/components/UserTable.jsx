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
		<table id="UserTable">
			<thead>
				<tr>
					<th style={{ width: "15%" }}>Firstname</th>
					<th style={{ width: "15%" }}>Lastname</th>
					<th style={{ width: "25%" }}>Email</th>
					<th style={{ width: "15%" }}>Phone</th>
					<th style={{ width: "30%" }}>Actions</th>
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
									className="edit"
									onClick={() => {
										editRow(user);
									}}
								>
									Edit
								</button>
								<button className="delete" onClick={() => deleteUser(user.id)}>
									Delete
								</button>
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
