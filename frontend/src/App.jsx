import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "@page/Home";
import Login from "@page/Login";
import NotFound from "@page/NotFound";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;

