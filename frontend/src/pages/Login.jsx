import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
	const [username, setUsername] = useState();
	const [password, setPassword] = useState();

	const handleNameChange = (e) => {
		setUsername(e.target.value);
	};

	const handlePassChange = (e) => {
		setPassword(e.target.value);
	};

	return (
		<main id="MainLogin">
			<h1>Login</h1>

			<form>
				<label>
					Firstname :{" "}
					<input type="text" value={username} onChange={handleNameChange} />
				</label>

				<label>
					Password :{" "}
					<input type="password" value={password} onChange={handlePassChange} />
				</label>
			</form>

			<h2>{username}</h2>
			<h2>{password}</h2>

			<Link to="/admin">
				<button>CLICK ME</button>
			</Link>
		</main>
	);
};

export default Login;
