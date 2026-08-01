import { useContext, createContext, useState } from "react";
import contas from "../contas.json";

export const LoginContext = createContext({});


export function LoginProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");

    
    

    return (
        <LoginContext.Provider value={{ isLoggedIn, username, login }}>
            {children}
        </LoginContext.Provider>
    )
}
