import { Dispatch, SetStateAction, createContext, useState } from "react";

interface Props {
    logged: boolean;
    setLogin: Dispatch<SetStateAction<boolean>>
}

export const LoginContext = createContext<Props>({
    logged: false,
    setLogin: () => {}
});

function LoginContextProvider({ children }: {children: JSX.Element}) {
    const [logged, setLogin] = useState<boolean>(JSON.parse(localStorage.getItem("logged") || "false"));
    localStorage.setItem("logged", logged + '');

    return (
        <LoginContext.Provider value={{ logged, setLogin }}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginContextProvider