import { useContext } from "react";
import { LoginContext } from "./context";
import { Navigate } from "react-router-dom";

export function Login(){
  const { setLogin, logged } = useContext(LoginContext);
  console.log('Login: ', logged);

  return (
    <>
      <h1>Login</h1>
      <button onClick={() => {setLogin(!logged);}}>
        {logged ? 'log out' : 'log in'}
      </button>
    </>
  );
}