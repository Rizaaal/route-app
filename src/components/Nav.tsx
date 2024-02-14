import { useContext } from "react";
import { LoginContext } from "../context";

export function Nav(): JSX.Element | null {
  const { logged, setLogin } = useContext(LoginContext);

  const nav = {
    alignSelf: "normal",
    display: "flex",
    justifyContent: "space-around",
    listStyle: "none"
  }

  if (logged) {
    return (
    <ul style={nav}>
      <li>
        <button onClick={() => {setLogin(false)}}>logout</button>
      </li>
    </ul>
    )
  } else {
    return null
  }
}