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
		if (!formInputs) return "please input credentials.";
		axios
			.post("http://localhost:5005/login", formInputs)
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

			<h2>{formInputs.username}</h2>
			<h2>{formInputs.password}</h2>

			<button onClick={() => LoginAttempt()}>LOGIN</button>
		</main>
	);
};

export default Login;
