import React from "react";
import ReactDOM from "react-dom/client";
import UserExport from "./contexts/UserContext";
import App from "./App";

import "./styles/common/main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<UserExport.ContextProvider>
			<App />
		</UserExport.ContextProvider>
	</React.StrictMode>
);

