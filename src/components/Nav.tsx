import { useContext } from "react";
import { LoginContext } from "../context";

export function Nav(): JSX.Element | null {
  const { logged, setLogin } = useContext(LoginContext);

  if (logged) {
    return (
    <ul>
      <li>
        <button onClick={() => {setLogin(false)}}>logout</button>
      </li>
    </ul>
    )
  } else {
    return null
  }
}