import UserTable from "@comp/UserTable";

const Home = () => {
	return (
		<main>
			<h1>Home CRUD</h1>
			<section>
				<h2>Add user</h2>
			</section>
			<section>
				<h2>View users</h2>
				<UserTable />
			</section>
		</main>
	);
};

export default Home;
