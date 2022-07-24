import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ user, children }) => {
	if (!user.role === "admin") {
		return <Navigate to="/" replace />;
	}

	return children;
};

export default ProtectedRoute;
