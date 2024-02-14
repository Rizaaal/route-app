import { useContext } from "react";
import { LoginContext } from "../context";
import { NavLink, Navigate } from "react-router-dom";

export function Login(){
  const { setLogin, logged } = useContext(LoginContext);
  console.log('Login: ', logged);

  return (
    <>
      <h1>Login</h1>
      <NavLink onClick={() => {setLogin(true)}} to={'/'}>
        login
      </NavLink>
    </>
  );
}