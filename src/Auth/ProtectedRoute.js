import { useUser } from "./Context/UserContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useUser();
  
  console.log(currentUser);
  // Check if user is not logged in
  if (!currentUser) {
    return <Navigate to="/washo/signin" replace />;
  }

  
  return children;
};

export default ProtectedRoute;
