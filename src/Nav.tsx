import { useContext } from "react";
import { LoginContext } from "./context";
import { NavLink } from "react-router-dom";

export function Nav(): JSX.Element{

    const nav = {
        alignSelf: "normal",
        display: "flex",
        justifyContent: "space-around",
        listStyle: "none"
    }

    return (
        <ul style={nav}>
            <li>
                <NavLink to={'/'} className="App-link">Posts</NavLink>
            </li>
            <li>
                <NavLink to={'/Login'} className="App-Link">Login</NavLink>
            </li>
        </ul>
    );
}