import { createContext, useState } from 'react';

export const TodoContext = createContext({})

export function TodoProvider({ children }) {
    const [lista, setLista] = useState([
        {
            id: 1713590000000, 
            texto: "Estudar React",
            username: "Gabriel",
            concluida: false   
        },
        {
            id: 1713590000001,
            texto: "Estudar JavaScript",
            username: "Gabriel",
            concluida: false
        },
        {
            id: 1713590000002,
            texto: "Estudar TypeScript",
            username: "Ana",
            concluida: false
        }

    ])

    return (
        <TodoContext.Provider value={{ lista, setLista}}>
            {children}
        </TodoContext.Provider>
    )
}
