import { Link } from "react-router-dom";

const Login = () => {
	return (
		<main id="MainLogin">
			<h1>Login</h1>
			<p>Login page</p>
			<Link to="/home">
				<button>CLICK ME</button>
			</Link>
		</main>
	);
};

export default Login;
