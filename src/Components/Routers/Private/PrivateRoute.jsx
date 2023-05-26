import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Auth/AuthProvider';

const PrivateRoute = ({ children }) => {
	const { loading, currentUser } = useContext(AuthContext);

	const location = useLocation();
	console.log(location);

	if (loading) {
		return <progress className="progress w-56"></progress>;
	}
	if (currentUser?.email) {
		return children;
	}
	return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
