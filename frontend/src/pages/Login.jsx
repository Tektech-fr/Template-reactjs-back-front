import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
	const [formInputs, setFormInputs] = useState({
		username: "",
		password: "",
	});

	const handleChange = (e) => {
		setFormInputs({
			...formInputs,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<main id="MainLogin">
			<h1>Login</h1>

			<form>
				<label>
					Firstname :{" "}
					<input
						type="text"
						name="username"
						value={formInputs.username}
						onChange={handleChange}
					/>
				</label>

				<label>
					Password :{" "}
					<input
						type="password"
						name="password"
						value={formInputs.password}
						onChange={handleChange}
					/>
				</label>
			</form>

			<h2>{formInputs.username}</h2>
			<h2>{formInputs.password}</h2>

			<Link to="/admin">
				<button>CLICK ME</button>
			</Link>
		</main>
	);
};

export default Login;
