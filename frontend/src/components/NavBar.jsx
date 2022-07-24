import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<nav id="NavBarComponent">
			<Link to="/">Home</Link>
			<Link to="/admin">Admin</Link>
			<Link to="/about">About</Link>
		</nav>
	);
};

export default NavBar;
