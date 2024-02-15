import { Navigate, Outlet } from "react-router-dom";

function ProtectedRouteLogin({logged}: {logged: boolean}): JSX.Element {  
  if (logged) return <Navigate to='/' />;
  return <Outlet />;
};

export default ProtectedRouteLogin;