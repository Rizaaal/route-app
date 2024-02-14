import { Navigate, Outlet, Route } from "react-router-dom";
import { Login } from "../components/Login";

export function ProtectedRouteLogin({logged}: {logged: boolean}): JSX.Element {  
  if (logged) return <Navigate to='/' />;
  return <Outlet />;
}