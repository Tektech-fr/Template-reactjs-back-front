import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
	const [formInputs, setFormInputs] = useState({
		username: "",
		password: "",
	});

	const navigate = useNavigate();

	const handleChange = (e) => {
		setFormInputs({
			...formInputs,
			[e.target.name]: e.target.value,
		});
	};

	const LoginAttempt = () => {
		if (!formInputs) return "please provide credentials.";
		axios
			.post("http://localhost:5005/auth", {
				username: formInputs.username,
				password: formInputs.password,
			})
			.then((res) => {
				navigate("/admin");
			})
			.catch((err) => {
				console.error(err);
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

			<button onClick={() => LoginAttempt()}>LOGIN</button>
		</main>
	);
};

export default Login;
