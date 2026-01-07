import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  // Wait until auth state is checked
  if (loading) {
    return <div className="p-6">Loading...</div>;
  }

  // If NOT logged in → send to login page
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // If logged in → allow access
  return children;
};

export default ProtectedRoute;