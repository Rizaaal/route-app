import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({logged}: {logged: boolean}): JSX.Element {  
  if (!logged) return <Navigate to='/login' />;
  return <Outlet />;
};

export default ProtectedRoute;