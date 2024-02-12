import { useContext } from "react";
import { LoginContext } from "./context";

export function Login(){
  const { setLogin, logged } = useContext(LoginContext);

  return (
    <>
      <h1>Login</h1>
      <button onClick={() => {setLogin(!logged)}}>
        {logged ? 'log out' : 'log in'}
      </button>
    </>
  );
  
}