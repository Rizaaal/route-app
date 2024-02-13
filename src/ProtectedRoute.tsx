import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoute(logged: {logged: boolean}): JSX.Element {  
  if (!logged.logged) return <Navigate to='/login' />;  
  return <Outlet />;
}