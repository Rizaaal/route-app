import { ReactElement, ReactHTML, useContext } from "react";
import { NavLink } from "react-router-dom";
import { LoginContext } from "./context";

export function Nav(): JSX.Element | null {
  const { logged } = useContext(LoginContext);

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
        <NavLink to={'/'} className="App-link">Posts</NavLink>
      </li>
      <li>
        <NavLink to={'/Login'} className="App-Link">Logout</NavLink>
      </li>
    </ul>
    )
  } else {
    return null
  }
}