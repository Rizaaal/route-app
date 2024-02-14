import { useContext } from "react";
import { LoginContext } from "../context";
import { NavLink } from "react-router-dom";

export function Login(){
  const { setLogin } = useContext(LoginContext);

  return (
    <>
      <h1>Login</h1>
      <button>
        <NavLink className='button-link' onClick={() => {setLogin(true)}} to={'/'}>
          login
        </NavLink>
      </button>
    </>
  );
}