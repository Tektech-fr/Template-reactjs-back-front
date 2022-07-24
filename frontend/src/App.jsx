import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";

import Home from "@page/Home";
import Login from "@page/Login";
import Admin from "./pages/Admin";
import NotFound from "@page/NotFound";
import About from "@page/About";

import NavBar from "@comp/NavBar";
import ProtectedRoute from "@comp/ProtectedRoute";

import UserExport from "./contexts/UserContext";

const App = () => {
	const { user } = useContext(UserExport.UserContext);

	return (
		<BrowserRouter>
			<NavBar />

			<Routes>
				<Route path="/" element={<Home />} />

				<Route path="/about" element={<About />} />

				<Route path="/login" element={<Login />} />

				<Route
					path="/admin"
					element={
						<ProtectedRoute user={user}>
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

