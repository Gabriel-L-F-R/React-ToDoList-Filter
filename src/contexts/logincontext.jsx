import { useContext, createContext, useState } from "react";
import contas from "../contas.json";

export const LoginContext = createContext({});


export function LoginProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");

    function login(username, password) {
        if (contas.some(conta => conta.username === username && conta.password === password)) {
            setIsLoggedIn(true);
            setUsername(username);
            return true;
        }
        return false;
    }
    

    return (
        <LoginContext.Provider value={{ isLoggedIn, username, login }}>
            {children}
        </LoginContext.Provider>
    )
}
