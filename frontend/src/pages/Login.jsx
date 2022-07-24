import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserExport from "../contexts/UserContext";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [msg, setMsg] = useState("");

	const navigate = useNavigate();

	const handleUsername = (e) => {
		setUsername(e.target.value);
	};
	const handlePassword = (e) => {
		setPassword(e.target.value);
	};

	const LoginAttempt = () => {
		if (!username || !password) {
			setMsg("Please provide credentials first.");
			return;
		}
		axios
			.post("http://localhost:5005/users/auth", {
				username,
				password,
			})
			.then((res) => {
				console.log(res.data);
				setUsername(res.data);
				if (user.role === "admin") {
					navigate("/admin");
				} else {
					navigate("/");
				}
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
						value={username}
						onChange={handleUsername}
					/>
				</label>

				<label>
					Password :{" "}
					<input
						type="password"
						name="password"
						value={password}
						onChange={handlePassword}
					/>
				</label>
			</form>

			<button onClick={() => LoginAttempt()}>LOGIN</button>
		</main>
	);
};

export default Login;
