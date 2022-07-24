import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "@page/Home";
import Login from "@page/Login";
import Admin from "./pages/Admin";
import NotFound from "@page/NotFound";
import About from "@page/About";

import NavBar from "@comp/NavBar";
import ProtectedRoute from "@comp/ProtectedRoute";

const App = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(null);

	const logIn = () => {
		setIsLoggedIn(true);
	};

	const logOut = () => {
		setIsLoggedIn(false);
	};

	return (
		<BrowserRouter>
			<NavBar />

			{isLoggedIn ? (
				<button onClick={logOut}>Logout</button>
			) : (
				<button onClick={logIn}>Login</button>
			)}

			<Routes>
				<Route path="/" element={<Home />} />

				<Route path="/about" element={<About />} />

				<Route path="/login" element={<Login />} />

				<Route
					path="/admin"
					element={
						<ProtectedRoute isLoggedIn={isLoggedIn}>
							<Admin />
						</ProtectedRoute>
					}
				/>

				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;

