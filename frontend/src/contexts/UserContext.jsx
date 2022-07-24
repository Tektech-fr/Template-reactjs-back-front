import { createContext, useState } from "react";

const UserContext = createContext();

function ContextProvider({ children }) {
	const [user, setUser] = useState();
	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
}

const UserExport = { UserContext, ContextProvider };

export default UserExport;
