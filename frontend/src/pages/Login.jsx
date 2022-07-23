import { Link } from "react-router-dom";

const Login = () => {
	return (
		<main id="MainLogin">
			<h1>Login</h1>

			<Link to="/admin">
				<button>CLICK ME</button>
			</Link>
		</main>
	);
};

export default Login;
